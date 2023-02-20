<script>
	import { Button,Chevron, Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte'
	import { Heading, P, A, Label, Input } from 'flowbite-svelte'
	import type { cityStore } from './stores/cityStore.ts'
	let cityName;
	let cityID;
	let demographics = ["apple"];
	let pricing = ["apple"];
	let climate = ["apple"];
	console.log(city);
	import { onMount } from 'svelte';
	//1. first make call to get basic city info
	//2. then make the call with city id to get demographics
	onMount(async () => {
		fetch('https://salarymatch.azurewebsites.net/api/cities')
			.then(response => response.json())
			.then(data => {
					console.log(data);
					
			}).catch(error => {
				console.log(error);
				return [];
			});
	});
	
</script>
<svelte:head>
	<title>City Search Page</title>
	<meta name="description" content="City Search Results View" />
</svelte:head>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">{cityName}</Heading>	
	</div>
	<div class = "container">
		<div class = 'cityInfo'>
		<Button><Chevron>Demographics</Chevron></Button>
		<Dropdown >
			{#each demographics as detail}
				<section>
					<DropdownItem>{detail}</DropdownItem>
				</section>
			{/each}
		</Dropdown>
		</div>
		<div class = 'cityInfo'>
			<Button><Chevron>Pricing</Chevron></Button>
			<Dropdown >
				{#each pricing as detail}
					<section>
						<DropdownItem>{detail}</DropdownItem>
					</section>
				{/each}
			</Dropdown>
		</div>
		<div class = 'cityInfo'>
			<Button><Chevron>Climate</Chevron></Button>
			<Dropdown >
				{#each climate as detail}
					<section>
						<DropdownItem>{detail}</DropdownItem>
					</section>
				{/each}
			</Dropdown>
		</div>
	</div>
	
</main>

<style>
	
	.title {
			position: absolute;
			top: 100px;
			left:100px;
		}
	
	.cityInfo {
		border-right: 1px solid white;
		padding: 1rem;
		min-width: 20vw;
		height: 20vh;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
		background-color: rgba(224, 189, 240, 1);
	}
	.container {
		flex-direction: column;
	}
</style>
