<script>
	import { Button, Dropdown, DropdownItem, Chevron, Checkbox } from 'flowbite-svelte'
	export let data;
	let totalCost = 0;
    let options = [];
    options.push("rent");
    totalCost += data.city.average_rent

    const aggregateCosts = async () => {
        totalCost = 0;
        if (options.includes("rent"))  {
            totalCost += +(data.city.average_rent);
        }
        if (options.includes("groceries"))  {
            totalCost += (+(data.city.average_groceries_cost) * 8);
        }
        if (options.includes("water"))  {
            totalCost += +(data.city.average_water_cost);
        }
        if (options.includes("trash"))  {
            totalCost += +(data.city.average_trash_cost);
        }
        if (options.includes("electricity"))  {
            totalCost += +(data.city.average_electricity_cost);
        }
        if (options.includes("gas"))  {
            totalCost += +(data.city.average_gas_cost);
        }
    }

    const selectOption = (option) => {
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
    .city-costs {
        display: flex;
        justify-content: center;
        align-items: center;
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

<div class="city-costs">
	<div class="total">
		<p>Average Cost of Living: <span class="text-xl font-bold">${(+totalCost).toFixed(2)}</span>/Month</p>
	</div>
	<div class="filters">
		<Button><Chevron>Filters</Chevron></Button>
		<Dropdown class="w-48 overflow-y-auto py-1 h-48 text-sm">
		<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<Checkbox on:click={() => selectOption("groceries")}>Groceries</Checkbox>
		</li>
		<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<Checkbox checked on:click={() => selectOption("rent")}>Rent</Checkbox>
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
		<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<Button on:click={aggregateCosts}>Submit</Button>
		</li>
		</Dropdown>
	</div>
</div>
