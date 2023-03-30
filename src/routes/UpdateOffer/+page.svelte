<script>
	import { Heading, Card, Button } from 'flowbite-svelte'
	/** @type {import('./$types').PageData} */
	import {authToken} from '../../auth'
	console.log($authToken);
	let url = 'https://salarymatch.azurewebsites.net/api/joboffers';
	async function loading() {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": "Bearer " + $authToken
			}
		});
		const data  = await response.json();
		console.log(data);
		return data;
	}
</script>

<svelte:head>
	<title>Update Job Offer Page</title>
	<meta name="description" content="Form to Update Job Offers" />
</svelte:head>

<div class = 'title'>
	<Heading tag="h2" customSize="text-3xl font-bold ">Update Your Job Offers</Heading>	
</div>
<div class = 'subtitle'>
	<Heading tag="h6" customSize="text-lg font-normal ">Select An Offer to Update</Heading>	
</div>
<div class= "slidercontainer">
	<div class="slider">
		{#await loading() then data}
			{#each data as offer}
				<Card class="flex-col justify-end bg-purple-300 mx-5 w-[500px] mb-0">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title: {offer.title}</h5>
					<div class="mb-5 h-fit">
						<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Company: {offer.company}</p>
						<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Location: {offer.city_id}, {offer.state_id}</p>
						<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Base Salary: ${offer.salary}</p>
						<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Bonuses: ${offer.signing_bonus}</p>
						<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Relocation: ${offer.relocation_bonus}</p>
					</div>

					<Button href="/UpdateOffer/{offer.id}" class="w-fit">Edit This Offer<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
				</Card>
			{/each}
		{/await}
	</div>
</div>

<style>
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
		height: fit-content;
	}
</style>
