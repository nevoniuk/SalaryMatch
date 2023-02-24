<script>
	import { Input } from "flowbite-svelte";


    export let data;
    import {authToken} from '../../../auth';
    let is_anonymous = false;
    let onReview = async () => {
        console.log($authToken)
        var overall_rating = document.getElementsByName("overall_rating")[0].value;
        var comment = document.getElementsByName("comment")[0].value;
        var company_id = data.company.id;
        var url = "https://salarymatch.azurewebsites.net/api/companies/" + company_id + "/reviews";
        console.log(overall_rating, comment, company_id, $authToken, url, is_anonymous);
        const post = (await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + $authToken
            },
            body: JSON.stringify({
                overall_rating: overall_rating,
                comment: comment,
                is_anonymous: is_anonymous
            })
        }).then(async data => {
            if (data.status == 200||data.status == 201) {
                console.log("success");
                window.location.href = "/companies/" + company_id;
            } else {
                console.log("fail");
                alert("Review Submission Failed")
            }

        }).catch(err => console.log('err')));
    };
</script>

<style>
    .button {
        background-color:rgb(142, 134, 230);
        padding: 5px;
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(34, 17, 66,0.4);
        margin: 8px;
        margin-left: 30px;
        margin-right: 30px;
    }
    .login.card {
        display: flex;
        align-items: center;
        align-self: center;
        justify-content: center;
        flex-direction: column;
        margin: 100px;
        margin-left: 30px;
        margin-right: 30px;
        padding-bottom: 60px;
        padding-top: 40px;
    }
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
    .comment {
        align-items: center;
    }
    .rating {
        margin-left: -120px;
    }

</style>
<h1 class="company-title">{data.company.name}</h1>
<div class="login card">
    <p class="review-title">Submit Reviews:</p>
    <div class="comment">
        <textarea id="comment" name="comment" rows="5" cols="50"> </textarea>
    </div>
    <div class='rating'>
        <form>
            <label for="overall_rating">Overall Rating:</label>
            <input name="overall_rating" size='1'>
        </form>
    </div>
    <div>
        <label>
            <input type=checkbox bind:checked={is_anonymous} >
            Send Anonymously
        </label>
    </div>
    <div class="button">
        <button on:click={onReview}>
            <p>Submit</p>
        </button>
    </div>
</div>

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
