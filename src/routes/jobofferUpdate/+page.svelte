<script>
	import { Heading, P, A, Label, Input } from 'flowbite-svelte'
	import {joboffers} from './jobs.ts' /* will contain a function to retrieve data from cosmos*/
	console.log(joboffers.length);
</script>

<svelte:head>
	<title>Update Job Offer Page</title>
	<meta name="description" content="Form to Update Job Offers" />
</svelte:head>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Update Your Job Offers</Heading>	
	</div>
	<div class = 'subtitle'>
		<Heading tag="h6" customSize="text-lg font-bold ">Select An Offer to Update</Heading>	
	</div>
	<div class= "slidercontainer">
		<div class="slider">
			{#each joboffers as offer}
				<section>
					<div class= "titleAndEdit">
						<div class="offeritem">
							<p>
								Title: {offer.title}
							</p>
						</div>
						<div class="editbutton">
							<span class="material-symbols-outlined orange-hover"> edit_square </span>
						</div>
					</div>
					<div class="offeritem">
						<p>
							{offer.title}
						</p>
					</div>
				</section>
			{/each}
		</div>
	</div>
	
</main>

<style>
	.material-symbols-outlined {
        font-size: 20px;
    }
	.title {
			position: absolute;
			top: 100px;
			left:10px;
		}
	.subtitle {
		position: absolute;
		top: 250px;
		left:10px;
	}
	.slidercontainer {
		top:300px;
		position: absolute;
	}

	.slider {
		font-family: sans-serif;
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		
	}
	
	section {
		border-right: 1px solid white;
		padding: 1rem;
		min-width: 20vw;
		height: 20vh;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
		background-color: rgba(224, 189, 240, 1);
	}
	.offeritem {
		color:black;
	}
	.orange-hover:hover {
        border-radius: 10px;
        background-color: #FFC187;
    }
	.titleAndEdit {
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.material-symbols {
		font-size: 20px;
	}
</style>
