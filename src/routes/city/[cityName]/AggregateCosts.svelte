<script>
	import { Popover, Toggle, Table, TableHead, TableHeadCell, TableBodyCell, TableBody, TableBodyRow } from 'flowbite-svelte'
	export let data;

    const filters = {
        "groceries": true,
        "rent": true,
        "electricity": true,
        "trash": true,
        "water": true
    }

    $: totalCost = (data.city.average_groceries_cost ?? 0) * +filters.groceries +
                   data.city.average_rent * +filters.rent +
                   data.city.average_electricity_cost * +filters.electricity +
                   data.city.average_trash_cost * +filters.trash +
                   data.city.average_water_cost * +filters.water
</script>

<div class="flex flex-col">
    <Table>
        <TableHead>
            <TableHeadCell>Include</TableHeadCell>
            <TableHeadCell>Monthly Expenditure</TableHeadCell>
            <TableHeadCell>Monthly Cost</TableHeadCell>
        </TableHead>
        <TableBody>
            <TableBodyRow>
                <TableBodyCell><Toggle bind:checked={filters.groceries}/></TableBodyCell>
                <TableBodyCell>Groceries (Estimated)</TableBodyCell>
                <TableBodyCell>
                    <div class="flex flex-row">
                        ${(data.city.average_groceries_cost ?? 0).toFixed(2)}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 m-0" id="groceries">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                    </div>
                </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell><Toggle bind:checked={filters.rent}/></TableBodyCell>
                <TableBodyCell>Rent</TableBodyCell>
                <TableBodyCell>${(+data.city.average_rent).toFixed(2)}</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell><Toggle bind:checked={filters.electricity}/></TableBodyCell>
                <TableBodyCell>Electricity</TableBodyCell>
                <TableBodyCell>${(+data.city.average_electricity_cost).toFixed(2)}</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell><Toggle bind:checked={filters.trash}/></TableBodyCell>
                <TableBodyCell>Trash</TableBodyCell>
                <TableBodyCell>${data.city.average_trash_cost.toFixed(2)}</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
                <TableBodyCell><Toggle bind:checked={filters.water}/></TableBodyCell>
                <TableBodyCell>Water</TableBodyCell>
                <TableBodyCell>${data.city.average_water_cost.toFixed(2)}</TableBodyCell>
            </TableBodyRow>
        </TableBody>
    </Table>
    <div class="text-sm self-center">
        Estimated using data from <a href="https://www.census.gov/programs-surveys/ahs.html" class="text-blue-500">https://www.census.gov</a>
    </div>
    <div class="text-xl font-bold flex flex-row justify-around" id="totalCost">
        <div>Calculated Total</div>
        <div>${(+totalCost).toFixed(2)} / Month</div>
    </div>
    <Popover class="w-64 text-sm font-light" title="The Math Behind Groceries" triggeredBy="#groceries">
        Calculated from the following food amounts and units: fresh orange juice (58 oz), white bread (24oz), sugar (4lb), frozen chicken dinner (8-10 oz), ground beef (1 lb), potatoes (5 lb), eggs (1 doz), whole milk (.5 gal)
    </Popover>
</div>