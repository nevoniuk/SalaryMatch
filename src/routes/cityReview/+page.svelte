<script>
	import { Input } from "flowbite-svelte";
    import { Button, Textarea} from 'flowbite-svelte'
    import {authToken} from '../../auth';
    let is_anonymous = false;
    const data = [{company: "microsoft", content: "akjwehil awjhd djkslajdhfjksa"},
     {company: "microsoft", content: "akjwehil awjhd djkslajdhfjksa"}, {company: "microsoft", content: "akjwehil awjhd djkslajdhfjksa"},
      {company: "microsoft", content: "akjwehil awjhd djkslajdhfjksa"}, {company: "microsoft", content: "akjwehil awjhd djkslajdhfjksa"}];
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
         <!--{#await loading() then data} -->
				{#each data as review}
					<section>
                        <p>Overall Rating: {review.company}</p>
                        <p>{review.content}</p>
                    </section>
                {/each}
        <!-- {/await}-->
        </div>
	</div>
	<div class="c2">
        <form method="POST" action="?/create">
            <div class="comment">
                <textarea class="input" id="comment" name="comment" rows="5" cols="50"> </textarea>
            </div>
        </form>
		<div class='rating'>
			<form>
				<label for="overall_rating">Overall Rating:</label>
				<input name="overall_rating" size='1'>
			</form>
		</div>
		<div class="send-option">
			<label>
				<input type=checkbox bind:checked={is_anonymous} >
				Send Anonymously
			</label>
		</div>
		<div class="button">
			<button on:click={onReview}>Submit</button>
		</div>
	</div>
    
</div>

