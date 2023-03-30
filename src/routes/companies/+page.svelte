<script lang="ts">
	import { Button} from 'flowbite-svelte';
	import { Heading, Label} from 'flowbite-svelte';
</script>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Select A Company</Heading>	
	</div>
	<div class= 'cityOptions'>
		<div class='child1'>
				<Button href="/companies/b5f3a428-c4f6-44cb-99a1-4384a6cc6270">Microsoft</Button>
		</div>
		<div class='child1'>
				<Button href="/companies/2a1fc226-f8cc-4c0c-9c7b-a21f2ca55024">Google</Button>
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