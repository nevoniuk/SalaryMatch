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
				<Button href="/city/da85bd20-410d-4a78-a89d-082189edd288">Los Angeles</Button>
		</div>
		<div class='child1'>
				<Button href="/city/14a4b9bf-e39d-4881-ae22-e1f1a7dfd3ef">New York City</Button>
			</div>
		<div class='child1'>
				<Button href="/city/5cbc4910-6e50-4d15-a022-a18dfad54c08">Chicago</Button>
			</div>
		<div class='child1'>
				<Button href="/city/80c026f8-e6a8-46e9-975a-ac81b6528556">Seattle</Button>
			</div>
		<div class='child1'>
				<Button href="/city/d3970b38-b6eb-4cb1-ace4-630349526863">Phoenix</Button>
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