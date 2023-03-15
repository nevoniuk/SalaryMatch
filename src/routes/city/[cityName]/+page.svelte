<script>
	import PopulationBar from "./PopulationBar.svelte";
    import WeatherGraph from "./WeatherGraph.svelte";
    import {Heading} from 'flowbite-svelte';
    export let data;
    let months = [38, 29, 19, 59, 39, 20, 33, 44, 55, 45, 33, 22];
    let temp = 38;
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
		console.log(weather);
        console.log(weather["current"]);
		return weather;
	}
   
</script>

<style>
    .city-title {
        margin: 40px;
        margin-left: 60px;
        text-align: left;
        font-size: 40px;
    }

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

    .city-img {
        transform: rotate(-4deg) translate(0px, 20px);
        margin-bottom: 30px;
        margin-left: 20px;
    }
    .city-img-container {
        width: 250px;
        height: 250px;
        margin-right: 20px;
    }
    .demographics {
        margin-right: 20px;
    }
    .weather {
        display: flex;
        align-content: space-between;
        margin-top: 50px;
    }
    .graph {margin-right: 20px;}
    .temp {
        font-size: 20px;
        margin-right: 3px;
    }

</style>

<h1 class="city-title">{data.city.name}</h1>
<div class="card">
    <!-- <div class="city-img-container"> -->
        <!-- <img class="city-img" src="https://via.placeholder.com/200"/> -->
    <!-- </div> -->
    <div class="demographics">
        Average rent: ${data.city.average_rent} / month
        <br>
        Total Population: {Math.floor(data.city.total_population)}k People
        <br>
        <br>
        <PopulationBar subsetName="Caucasian" subsetTotal={data.city.caucasian_population} total={data.city.total_population} />
        <PopulationBar subsetName="Black" subsetTotal={data.city.black_population} total={data.city.total_population} />
        <PopulationBar subsetName="Native American" subsetTotal={data.city.native_american_population} total={data.city.total_population} />
        <PopulationBar subsetName="Asian American" subsetTotal={data.city.asian_american_population} total={data.city.total_population} />
        <PopulationBar subsetName="Pacific Islander" subsetTotal={data.city.pacific_islander_population} total={data.city.total_population} />
        <PopulationBar subsetName="Hispanic" subsetTotal={data.city.hispanic_population} total={data.city.total_population} />
        <br>
        <br>
    </div>
    <div class="weather">
        <div class="graph">
            <WeatherGraph months = {months} />
        </div>
       {#await loading() then weather}

            <h1 class="temp">Today:</h1>
            <h1 class="temp">{weather.current.temp_f}</h1>
            <h1 class="temp">deg fahrenheit</h1>
       {/await}
    </div>
</div>