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
	<div class="grid grid-cols-8 gap-5">
		{#each cities as city}
			<Card href={"/city/" + city.id}>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{city.name}</h5>
			</Card>
		{/each}
	</div>
</div>