<script lang="ts">
	import { Card, Heading, Button, Label} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';

	let states = [];
	let allstates = [];
	const getStates = async () => {
		const res = await axios.get(`https://salarymatch.azurewebsites.net/api/states`);
		states = res.data;
		allstates = res.data;
	}

	onMount(getStates);

	async function onChange() {
		console.log("submit");
		var state = document.getElementsByName("enterdState")[0].value;
		if (state == "") {
			states = allstates;
		} else {
			var url = "https://salarymatch.azurewebsites.net/api/states/search/" + state;
			const post = (await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}).then(async data => {
				states = await data.json();
				console.log("states: ", states);
			}).catch(err => console.log('err')));
		}
	}
</script>
<div class="flex flex-col gap-5 items-center">
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Search States</Heading>	
	</div>
	<div class='child1'>
		<form>
			<input type="text" name="enterdState" placeholder="Enter State" on:input={onChange}/>
		</form>
	</div>
	<div class="grid grid-cols-8 gap-5">
		{#each states as state}
			<Card href={"/state/" + state.id}>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{state.name}</h5>
			</Card>
		{/each}
	</div>
</div>