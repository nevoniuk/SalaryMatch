<script lang="ts">
	import { Card, Heading } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';

	let cities = [];
	const getCities = async () => {
		const res = await axios.get(`https://salarymatch.azurewebsites.net/api/cities`);
		cities = res.data;
	}

	onMount(getCities);
</script>

<div class="flex flex-col gap-5 items-center">
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Select A City</Heading>	
	</div>
	<div class="grid grid-rows-none auto-cols-max flex-wrap gap-5 w-full grid-cols-5">
		{#each cities as city}
			<Card href={"/city/" + city.id} size="lg">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{city.name}</h5>
				<iframe
					title={"Map of " + city.name}
					width="300"
					height="300"
					frameborder="0"
					scrolling="no"
					marginheight="0"
					marginwidth="0"
					src={"https://www.google.com/maps/embed/v1/place?q=" + city.name.replaceAll(" ", "+") + "&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}
				></iframe>
			</Card>
		{/each}
	</div>
</div>