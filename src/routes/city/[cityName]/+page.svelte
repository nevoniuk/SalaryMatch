<script>
	import PopulationBar from "./PopulationBar.svelte";
    import AggregateCosts from "./AggregateCosts.svelte";
    import WeatherGraph from "./WeatherGraph.svelte";
    import { Popover, Card, Button, Chevron} from "flowbite-svelte"
    import { Radar } from 'svelte-chartjs'
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        PointElement,
        RadialLinearScale,
        LineElement,
    } from 'chart.js';
    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        PointElement,
        RadialLinearScale,
        LineElement
    );

    export let data;
    import { onMount } from 'svelte';
	import { get } from 'svelte/store';
    import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
    let months = [data.city.avg_temp_jan, data.city.avg_temp_feb, data.city.avg_temp_march, data.city.avg_temp_april,
            data.city.avg_temp_may, data.city.avg_temp_june, data.city.avg_temp_july, data.city.avg_temp_aug, data.city.avg_temp_sept,
            data.city.avg_temp_oct, data.city.avg_temp_nov, data.city.avg_temp_dec];
    let key = "a4db2bcce6e548158ec03035230603";
    let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${data.city.name}`;
    async function loading() {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		});
		const weather  = await response.json();
        console.log(weather["current"]);
		return weather;
	}

    const utilitiesData = {
        labels: [
            'Electricity',
            'Gas',
            'Water',
            'Trash'
        ],
        datasets: [
            {
                label: 'Utilities Breakdown',
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(194, 116, 161)',
                data: [data.city.average_electricity_cost, data.city.average_gas_cost, data.city.average_water_cost, data.city.average_trash_cost],
            },
        ],
    };
</script>

<style>
    .card {
        width: 100%;
        background-color: green;
        display: flex;
        padding: 30px;
        background-color: var(--card-color);
        box-shadow: 2px 2px 4px 0px rgba(34, 17, 66,0.4);
        justify-content: center;
        flex-wrap: wrap;
    }
    .graph {
        margin-right: 20px;
    }
</style>

<div class="flex flex-col gap-5 mt-5">
    <div class="flex flex-row justify-around items-center">
        <div class="flex flex-col gap-5">
            <h1 class="text-8xl">{data.city.name}</h1>
            <Button outline href="/cityReview/{$page.params.cityName}">
                See what others are saying about {data.city.name}.&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 translate-y-[1px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </Button>
            <AggregateCosts data={data} />
       </div>
        <iframe
            title={"Map of " + data.city.name}
            width="1000"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src={"https://www.google.com/maps/embed/v1/place?q=" + data.city.name.replaceAll(" ", "+") + "&maptype=satellite&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}
        ></iframe>
    </div>
    <div class="card grid grid-rows-none gap-10">
        <Card>
            <p class="text-xl font-bold">Total Population: {Math.floor(data.city.total_population)} Thousand</p>
            <div class="text-sm font-light mb-5">Data gathered from <a class="text-blue-500" href="https://www.census.gov/programs-surveys/ahs.html">https://www.census.gov</a></div>
            <div class="flex flex-col gap-5">
                <PopulationBar subsetName="Caucasian" subsetTotal={data.city.caucasian_population} total={data.city.total_population} />
                <PopulationBar subsetName="Black" subsetTotal={data.city.black_population} total={data.city.total_population} />
                <PopulationBar subsetName="Native American" subsetTotal={data.city.native_american_population} total={data.city.total_population} />
                <PopulationBar subsetName="Asian American" subsetTotal={data.city.asian_american_population} total={data.city.total_population} />
                <PopulationBar subsetName="Pacific Islander" subsetTotal={data.city.pacific_islander_population} total={data.city.total_population} />
                <PopulationBar subsetName="Hispanic" subsetTotal={data.city.hispanic_population} total={data.city.total_population} />
            </div>
        </Card>
        {#await loading() then weather}
            <Card size="lg">
                <p class="text-xl font-bold w-full">Today's Weather: {weather.current.temp_f}&deg;F</p>
                <div class="text-sm font-light mb-16">Data gathered from <a class="text-blue-500" href="https://www.weatherapi.com/">https://www.weatherapi.com</a></div>
                <div class="graph">
                    <WeatherGraph months = {months} />
                </div>
            </Card>
        {/await}
        <Card>
            <p class="text-xl font-bold w-full">Utilities Breakdown</p>
            <div class="text-sm font-light mb-16">Data gathered from <a class="text-blue-500" href="https://www.census.gov/programs-surveys/ahs.html">https://www.census.gov</a></div>
            <Radar data={utilitiesData} options={{ responsive: true }} />
        </Card>
        <Card size="lg">
            <p class="text-xl font-bold w-full mb-5">Legalities</p>
            <p class="text-lg">Abortion: <span class="font-bold">{(data.city.state_abortion_laws ?? "Unknown").replace("_", " ").toUpperCase()}</span> per <a class="text-blue-500" href="https://www.reproductiverights.org/maps/abortion-laws-by-state/">reproductiverights.org</a></p>
            <p class="text-lg">Cannabis: <span class="font-bold">{(data.city.state_cannabis_legality ?? "Unknown").toUpperCase()}</span> per <a class="text-blue-500" href="https://www.ncsl.org/health/state-medical-cannabis-laws">ncsl.org</a></p>
            <p class="text-lg">Crime Rate: <span class="font-bold">{Math.floor(data.city.crime_rate_per_1000)} offenses / 1000 people</span> per <a class="text-blue-500" href="https://www.ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/tables/table-8/table-8.xls/view">fbi.gov</a></p>
            <p class="text-lg">School Score: <span class="font-bold">{data.city.state_school_score}/100</span> per <a class="text-blue-500" href="https://www.worldpopulationreview.com/state-rankings/public-school-rankings-by-state">worldpopulationreview.com</a></p>
        </Card>
    </div>
</div>