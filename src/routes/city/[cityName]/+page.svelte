<script>
	import PopulationBar from "./PopulationBar.svelte";
    import Menu from "../../Menu.svelte";
    export let data;
    let options = ["Calculated from the following food amounts and units: fresh orange juice (59 oz), white bread (24oz), sugar (4lb), frozen chicken dinner (8-10 oz), ground beef (1 lb), potatoes (5 lb), eggs (1 doz), whole milk (.5 gal)"];
    let menuDropped = false;
    let menuclicked = () => {
        if (menuDropped == true) {
            $: menuDropped = false;
        }
        else {
            $: menuDropped = true;
        }
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
    .groceries {
        display: flex;
		flex-wrap: wrap;
    }
    .material-symbols-outlined {
        font-size: 15px;
    }
    

</style>

<h1 class="city-title">{data.city.name}</h1>
<div class="card">
    <!-- <div class="city-img-container"> -->
        <!-- <img class="city-img" src="https://via.placeholder.com/200"/> -->
    <!-- </div> -->
    <div>
        Average rent: ${data.city.average_rent} / month
        <br>
        <div class="groceries">
            <div class="item">
                <p>
                    Average groceries: ${data.city.average_groceries_cost * 8} / month
                </p>
            </div>
            <div class="item">
                <a on:click={() => menuclicked()}>
                    <span class="material-symbols-outlined orange-hover"> help </span>
                </a>
            </div>
            <div class="menu">
                <Menu options={options} dropped={menuDropped} />
            </div>
        </div>
        Total Population: {Math.floor(data.city.total_population)}k People
        <br>
        <br>
        <PopulationBar subsetName="Caucasian" subsetTotal={data.city.caucasian_population} total={data.city.total_population} />
        <PopulationBar subsetName="Black" subsetTotal={data.city.black_population} total={data.city.total_population} />
        <PopulationBar subsetName="Native American" subsetTotal={data.city.native_american_population} total={data.city.total_population} />
        <PopulationBar subsetName="Asian American" subsetTotal={data.city.asian_american_population} total={data.city.total_population} />
        <PopulationBar subsetName="Pacific Islander" subsetTotal={data.city.pacific_islander_population} total={data.city.total_population} />
        <PopulationBar subsetName="Hispanic" subsetTotal={data.city.hispanic_population} total={data.city.total_population} />
    </div>
</div>