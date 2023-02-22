<script lang="ts">
	import { Button} from 'flowbite-svelte';
	import { Heading, Label} from 'flowbite-svelte';
</script>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Select A City</Heading>	
	</div>
	<div class= 'cityOptions'>
		<div class='child1'>
				<Button href="/CityOptions/{"Los Angeles"}">Los Angeles</Button>
		</div>
		<div class='child1'>
				<Button href="/CityOptions/{"New York City"}">New York City</Button>
			</div>
		<div class='child1'>
				<Button href="/CityOptions/{"Chicago"}">Chicago</Button>
			</div>
		<div class='child1'>
				<Button href="/CityOptions/{"Seattle"}">Seattle</Button>
			</div>
		<div class='child1'>
				<Button href="/CityOptions/{"Phoenix"}">Phoenix</Button>
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