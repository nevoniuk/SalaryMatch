<script>
    import { Card } from 'flowbite-svelte';
    export let data;
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
</style>

<div class="flex flex-col gap-5 mt-5">
    <div class="flex flex-row justify-around items-center">
        <div class="flex flex-col gap-5">
            <h1 class="text-8xl">{data.state.name}</h1>
       </div>
        <iframe
            title={"Map of " + data.state.name}
            width="1000"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src={"https://www.google.com/maps/embed/v1/place?q=" + data.state.name.replaceAll(" ", "+") + "&maptype=satellite&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}
        ></iframe>
    </div>
    <div class="card grid grid-rows-none gap-10">
        <Card>
            <p class="text-xl font-bold">Average Internet Cost: ${data.state.avg_internet_cost_permb} / mb</p>
            <div class="text-sm font-light mb-5">Data gathered from <a class="text-blue-500" href="https://www.broadbandsearch.net/blog/internet-cost-by-state">broadbandsearch.net</a></div>
        </Card>
        <Card>
            <p class="text-xl font-bold">State Sales Tax: {data.state.state_tax_rate}%</p>
            <div class="text-sm font-light mb-5">Data gathered from <a class="text-blue-500" href="https://taxfoundation.org/2022-sales-tax-rates-midyear/">taxfoundation.org</a></div>
        </Card>
    </div>
</div>