<script>
    export let data;
</script>

<style>

    .state-title {
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

</style>

<h1 class="state-title">{data.state.name}</h1>
<div class="card">
    <h1>
        Average Internet Cost: {data.state.avg_internet_cost_permb} dollars per megabit
        <br>
        State Tax Rate: {data.state.state_tax_rate}%
    </h1>
</div>