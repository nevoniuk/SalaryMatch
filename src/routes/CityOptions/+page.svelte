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
				<Button href="/city/d3aa6632-1c06-4e11-bae3-db72baff8ef0">Los Angeles</Button>
		</div>
		<div class='child1'>
				<Button href="/city/903a5f9c-ff50-4777-80ef-3d96ad6f3425">New York City</Button>
			</div>
		<div class='child1'>
				<Button href="/city/a53a3422-be4b-4aeb-8435-7f248109d066">Chicago</Button>
			</div>
		<div class='child1'>
				<Button href="/city/64e17b21-75df-4b9b-b7ad-acce02a5b569">Seattle</Button>
			</div>
		<div class='child1'>
				<Button href="/city/3c2a7eb4-b6a4-409f-954c-912341b8675a">Phoenix</Button>
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