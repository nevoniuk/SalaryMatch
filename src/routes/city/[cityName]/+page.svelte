<script>
	import PopulationBar from "./PopulationBar.svelte";
    import { Button, Dropdown, DropdownItem, Chevron, Checkbox } from 'flowbite-svelte'
    export let data;
    let totalCost = 0;
    let rent = 1;
    let groceries = 0;
    let water = 0;
    let trash = 0;
    let gas = 0;
    let internet = 0;
    let utilities = 0;
    let electricity = 0;
    let options = [];
    options.push("rent");
    let aggregateCosts = async () => {
        //onhold until data is available
    }
    const selectOption = (option) => {
        console.log(option)
        if (options.includes(option)) {
            let before = [];
            let after = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i] == option) {
                    before = options.slice(0, i);
                    console.log(before);
                    after = options.slice(i+1);
                    console.log(after);
                    options = before.concat(after);
                }
            }
        }
        else {
            options.push(option);
        }
        console.log(options);
    }
</script>

<style>
    .container {
        display: flex;
        width:100%;
        justify-content: space-between;
    }
    
    .city-title {
        margin: 40px;
        margin-left: 60px;
        text-align: left;
        font-size: 40px;
    }
    .city-costs {
        display: flex;
        justify-content: center;
        align-items: center;
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
    .filters {
        display:flex;
        height: 20%;
    }
    .total {
        height: 20%;
        margin-right: 20px;
    }

</style>
<div class="container">
    <h1 class="city-title">{data.city.name}</h1>
    <div class="city-costs">
        <div class="total">
             <p>Average cost of living per month: ${totalCost}</p>
        </div>
        <div class="filters">
            <Button><Chevron>Filters</Chevron></Button>
            <Dropdown class="w-48 overflow-y-auto py-1 h-48 text-sm">
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox>Groceries</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox checked on:click={() => selectOption("rent")}>Rent</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox on:click={() => selectOption("internet")}>Internet</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox on:click={() => selectOption("taxes")}>State Taxes</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox on:click={() => selectOption("utilities")}>Utilities</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox on:click={() => selectOption("electricity")}>Electricity</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox on:click={() => selectOption("trash")}>Trash</Checkbox>
            </li>
            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <Checkbox on:click={() => selectOption("water")}>Water</Checkbox>
            </li>
            </Dropdown>
        </div>
    </div>
</div>

<div class="card">
    <!-- <div class="city-img-container"> -->
        <!-- <img class="city-img" src="https://via.placeholder.com/200"/> -->
    <!-- </div> -->
    <div>
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
    </div>
</div>