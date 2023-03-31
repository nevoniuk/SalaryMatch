<script>
	import { Input } from "flowbite-svelte";
    import { Button, Textarea} from 'flowbite-svelte'
    import {authToken} from '../../../auth'
    import { onMount } from 'svelte';
	import { get } from 'svelte/store'
    import { page } from '$app/stores';
    /** @type {import('./$types').PageData} */

    let is_anonymous = false;
    let email = "";
    export let form;
    export let data;
	console.log($authToken);
    console.log($page.params.cityID);
    var url = "https://salarymatch.azurewebsites.net/api/cities/" + $page.params.cityID + "/reviews";
    console.log(url);
	async function loading() {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + $authToken
            },
		});
		const data  = await response.json();
		console.log(data);
		return data;
	}

let getEmail = async () => {
        const post = (await fetch("https://salarymatch.azurewebsites.net/api/token", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: $authToken
            })
        }).then(async data => {
            email = await data.text()
            if (data.status == 200||data.status == 201) {
                console.log(email);
            } else {
                console.log("fail");
                alert("Login Failed")
            }

        }).catch(err => console.log('err')));
    }; 

    
    
let onReview = async () => {
        console.log($authToken)
        var rating = document.getElementsByName("rating")[0].value;
        var comment = document.getElementsByName("comment")[0].value;
        var url = "https://salarymatch.azurewebsites.net/api/cities/" + $page.params.cityID + "/reviews";
        var city = $page.params.cityID;
        console.log(rating, comment, url, is_anonymous, city);
        console.log(email);
        const post = (await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + $authToken
            },
            body: JSON.stringify({
                user_id: $authToken,
				is_anonymous: is_anonymous,
				city_id: city,
				overall_rating: rating,
				comment: comment
            })
        }).then(async data => {
            if (data.status == 200||data.status == 201) {
                console.log("success");
                
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
        margin-left: 240px;
        margin-right: 255px;
    }
    .city-title {
        margin: 40px;
        margin-left: 60px;
        text-align: left;
        font-size: 40px;
    }

    .review-title {
        font-size: 25px;
        padding-bottom: 30px;
    }

    .container {
        width: 100%;
        background-color: green;
        display: grid;
        //grid-template-columns: minmax(250px, 1fr) minmax(250px, 1fr);
		grid-template-columns: 1fr 1fr;
        background-color: var(--card-color);
        box-shadow: 2px 2px 4px 0px rgba(34, 17, 66,0.4);
        height: 50vh;
    }
	.c1 {
		display: grid;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        grid-template-columns: unset;
        grid-template-rows: unset;
	}
    .c2 {
        margin-left: 80px;
        align-items: center;
        justify-content: center;
    }

    .slider {
        min-height: 60%;
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
	}
	
	section {
		border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(34, 17, 66,0.4);
		padding: 1rem;
        margin: 5px;
		min-width: 40%;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
		background-color: rgba(244, 245, 255, 1);
	}
    .review {
        margin-top: 20px;
    }
    .comment {
        align-items: center;
    }
    .input {
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(34, 17, 66,0.4);
    }
    .rating {
        margin-left: 150px;
    }
    .send-option {
        margin-left: 190px;
    }

</style>
<h1 class="city-title">City Name Reviews</h1>
<div class="container">
	<div class="c1">
        <div class="slider">
            {#await loading() then data}
                    {#each data as review}
                        <section>
                            <p>User: {review.user_id}</p>
                            <p>Overall Rating: {review.overall_rating}</p>
                            <p>Comment: {review.comment}</p>
                        </section>
                    {/each}
            {/await}
        </div>
	</div>
	<div class="c2">
        
            <div class="comment">
                <textarea class="input" name="comment" rows="5" cols="50"> </textarea>
            </div>
            <div class='rating'>
                <form>
                    <label for="rating">Overall Rating:</label>
                    <input name="rating" size='1'>
                </form>
            </div>
            <div class="send-option">
                <label>
                    <input type=checkbox bind:checked={is_anonymous} >
                    Send Anonymously
                </label>
            </div>
            
           <div class="button">
                <button on:click={onReview, getEmail}>
                    <p>Submit</p>
                </button>
            </div>
            
	</div>
    
</div>

