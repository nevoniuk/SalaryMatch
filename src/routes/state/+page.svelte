<script lang="ts">
	import { Button} from 'flowbite-svelte';
	import { Heading, Label} from 'flowbite-svelte';
</script>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Select A State</Heading>	
	</div>
	<div class= 'stateOptions'>
		<div class='child1'>
            <Button href="/state/6ed4a3bd-4c9a-4a3f-a6f6-ebbb5c7ae27a">California</Button>
		</div>
		<div class='child1'>
            <Button href="/state/e86b7426-787f-42ec-84d7-f2b53815539c">D.C.</Button>
        </div>
		<div class='child1'>
            <Button href="/state/8b7e118d-c63a-4f4a-bbf3-c1df7615a0d3">Illinois</Button>
        </div>
		<div class='child1'>
            <Button href="/state/2cb26ff7-b99b-4c4f-8797-f27cae3b563e">Indiana</Button>
        </div>
							
	</div>
</main>

<style>
	.title {
		position: absolute;
		top: 100px;
		left: 525px;
	}
	.stateOptions {
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