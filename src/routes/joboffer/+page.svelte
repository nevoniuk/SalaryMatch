<script>
	import { Button,Chevron, Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte'
	import { Heading, P, A, Label, Input } from 'flowbite-svelte'
	let selected;
	let result = null;
	let city = 'Santa Monica, CA';
	let company = 'Google';
	let salary = '110000';
	let bonus = '10000';
	let relocation = '5000';

	async function doPost () {
		const res = await fetch('https://httpbin.org/post', {
			method: 'POST',
			body: JSON.stringify({
				city,
				company,
				salary,
				bonus,
				relocation
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}
	
</script>

<svelte:head>
	<title>Job Offer Page</title>
	<meta name="description" content="Form to Input Job Offer" />
</svelte:head>
 
<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Please Enter Your Job Details Below</Heading>	
	</div>
	<div class= 'gridL'>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>City</Label>
			</div>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>Company</Label>
			</div>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>Salary</Label>
			</div>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>Sign-on Bonus</Label>
			</div>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>Relocation Sum</Label>
			</div>
							
	</div>

	<div class= 'gridR'>
		<div class='child2'>
				<Input size="sm" placeholder="Santa Monica, CA" bind:value={city} />
			</div>
		<div class='child2'>
				<Input size="sm" placeholder="Google" bind:value={company} />
			</div>
		<div class='child2'>
				<Input size="sm" placeholder="110000" bind:value={salary} />
			</div>
		<div class='child2'>
				<Input size="sm" placeholder="10000" bind:value={bonus} />
			</div>
		<div class='child2'>
				<Input size="sm" placeholder="5000" bind:value={relocation} />
			</div>
	</div>
	<div class= 'submitButton'>
		<Button color="alternative" pill={true} on:click={doPost}>Submit</Button>
		<p> </p>
	</div>
	
	</main>


<style>
	body { 
		height:100%;
		background: linear-gradient(green 40%, transparent 40%) no-repeat;
	}
	.title {
		position: absolute;
		top: 100px;
		left:10px;
	}
	.gridL {
		position: absolute;
		top: 200px;
		left: 20px;
		display: grid;
	}
	.gridR {
		position: absolute;
		top: 200px;
		left: 150px;
		display: grid;
	}
	
	.gridL .child1 {
		margin-top: 15px;
		width: 100%;
		height: 50%;
	}
	.gridR .child2 {
		margin-top: 7px;
		width: 100%;
		height: 50%;
	}
	.submitButton {
		position: absolute;
		top: 550px;
		left: 1000px;
	}
	


</style>

