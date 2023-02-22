<script>
    export let data;
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
        padding: 10px;
        background-color: var(--card-color);
        box-shadow: 2px 2px 4px 0px rgba(34, 17, 66,0.4);
        justify-content: center;
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
</style>

<h1 class="city-title">San Francisco</h1>
<div class="card">
    <div class="city-img-container">
        <img class="city-img" src="https://via.placeholder.com/200"/>
    </div>
    <p>
        Located in California<br>
        Average rent: $50 / month<br>
        Weather is hot and dry
    </p>
</div>