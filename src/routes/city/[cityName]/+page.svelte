<script>
	import PopulationBar from "./PopulationBar.svelte";
    import AggregateCosts from "./AggregateCosts.svelte";
    import WeatherGraph from "./WeatherGraph.svelte";
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Popover, Card, Button, Dropdown, DropdownItem, Chevron, Checkbox} from "flowbite-svelte"
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
  
    .material-symbols-outlined {
        font-size: 10px;
    }
    .review-button {
        width: 100px;
        margin-left: 20px;
        margin-right: 10px;
    }
</style>

<div class="flex flex-col gap-5 mt-5">
    <div class="flex flex-row justify-around items-center">
        <div class="flex flex-col gap-5">
            <h1 class="text-9xl">{data.city.name}</h1>
            <AggregateCosts data={data} />
            <div class="review-button">
                <Button outline href="/cityReview/{$page.params.cityName}"> Reviews </Button>
            </div>
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
    
    <Table>
        <TableHead>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Average Monthly Cost</TableHeadCell>
        </TableHead>
        <TableBody>
            <TableBodyRow>
                <TableBodyCell>Rent</TableBodyCell>
                <TableBodyCell>${data.city.average_rent}</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>Groceries</TableBodyCell>
                <TableBodyCell>$<span id="groceries">{(data.city.average_groceries_cost * 8).toFixed(2)}<span class="material-symbols-outlined orange-hover"> help </span></span></TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell>Utilities</TableBodyCell>
                <TableBodyCell>${data.city.average_utility_cost.toFixed(2)}</TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>
    <Popover class="w-65 text-sm font-light" title="The Math Behind Groceries" triggeredBy="#groceries">
        Calculated from the following food amounts and units: fresh orange juice (58 oz), white bread (24oz), sugar (4lb), frozen chicken dinner (8-10 oz), ground beef (1 lb), potatoes (5 lb), eggs (1 doz), whole milk (.5 gal)
    </Popover>
    <div class="card grid grid-rows-none gap-10">
        <Card>
            <p class="text-xl font-bold">Total Population: {Math.floor(data.city.total_population)}k People</p>
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
                <p class="text-xl font-bold w-full mb-16">Today's Weather: {weather.current.temp_f}&deg;F</p>
                <div class="graph">
                    <WeatherGraph months = {months} />
                </div>
            </Card>
        {/await}
        <Card>
            <p class="text-xl font-bold w-full mb-16">Utilities Breakdown</p>
            <Radar data={utilitiesData} options={{ responsive: true }} />
        </Card>
        <Card>
            <p class="text-xl font-bold w-full mb-5">Legalities</p>
            <p class="text-lg">Abortion: <span class="font-bold">{(data.city.state_abortion_laws ?? "Unknown").replace("_", " ").toUpperCase()}</span></p>
            <p class="text-lg">Cannabis: <span class="font-bold">{data.city.state_cannabis_legality ?? "Unknown"}</span></p>
            <p class="text-lg">Crime Rate: <span class="font-bold">{Math.floor(data.city.crime_rate_per_1000)} Per 1k People</span></p>
            <p class="text-lg">School Score: <span class="font-bold">{data.city.state_school_score}/100</span></p>
        </Card>
    </div>
</div>