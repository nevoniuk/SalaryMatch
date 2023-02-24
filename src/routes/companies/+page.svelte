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
				<Button href="/companies/e350346a-8a4c-4f03-9eba-e12588673e8e">Microsoft</Button>
		</div>
		<div class='child1'>
				<Button href="/companies/b70514f2-7d57-44a5-a656-89be19b62580">Google</Button>
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