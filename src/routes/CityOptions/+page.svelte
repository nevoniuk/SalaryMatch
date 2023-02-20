<script lang="ts">
	import { Button} from 'flowbite-svelte';
	import { Heading, Label} from 'flowbite-svelte';
	import type { cityStore } from "./stores/cityStore";
	let { city } = cityStore;
	/* cityStore is not defined*/
	function handleClick(name) {
		$city = name;
	}
</script>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Select A City</Heading>	
	</div>
	<div class= 'cityOptions'>
		<div class='child1'>
				<Button on:click={() => handleClick("Los Angeles")} href="/CitySearch">Los Angeles</Button>
		</div>
		<div class='child1'>
				<Button on:click={() => handleClick("New York")} href="/CitySearch">New York</Button>
			</div>
		<div class='child1'>
				<Button on:click={() => handleClick("Chicago")} href="/CitySearch">Chicago</Button>
			</div>
		<div class='child1'>
				<Button on:click={() => handleClick("Seattle")} href="/CitySearch">Seattle</Button>
			</div>
		<div class='child1'>
				<Button on:click={() => handleClick("Pheonix")} href="/CitySearch">Pheonix</Button>
			</div>
							
	</div>
</main>

<style>
	.title {
		position: absolute;
		top: 100px;
		left: 525px;
	}
	.cityOptions {
		display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 60px;
        grid-gap: 20px;
		position: absolute;
		left: 560px;
		top: 200px;
	}
	.child1 {
		display: flex;
        align-items: center;
        justify-content: center;
	}
</style>