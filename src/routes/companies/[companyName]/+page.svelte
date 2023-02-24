<script>
    export let data;
</script>

<style>
    .company-title {
        margin: 40px;
        margin-left: 60px;
        text-align: left;
        font-size: 40px;
    }

    .review-title {
        font-size: 25px;
        padding-bottom: 30px;
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

    .review-div {
        margin-top: 30px;
    }

    .review {
        margin-top: 20px;
    }

</style>

<h1 class="company-title">{data.company.name}</h1>
<div class="card">
    <!-- <div class="city-img-container"> -->
        <!-- <img class="city-img" src="https://via.placeholder.com/200"/> -->
    <!-- </div> -->
    <h2 class="review-title">Reviews:</h2>
    <div class="review-div">
        {#each data.companyReviews as { id, user_id, overall_rating, comment }, i}
            <li class="review"><p>User {user_id} says "{comment}" about this company with an overall rating of {overall_rating}</p></li>
	    {/each}
    </div>
</div>