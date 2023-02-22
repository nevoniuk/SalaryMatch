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
	export let form;
	async function doPost () {
		const res = await fetch('https://httpbin.org/post', {
			method: 'POST',
			headers: {
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({
				city,
				company,
				salary,
				bonus,
				relocation
			})
		})
		
		const json = await res.json();
		result = JSON.stringify(json);
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
				<Label for='small-input' class='block mb-2'>Sate</Label>
			</div>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>Title</Label>
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
				<Label for='small-input' class='block mb-2'>Relocation Bonus</Label>
			</div>
		<div class='child1'>
			<Label for='small-input' class='block mb-2'>RSU</Label>
		</div>
							
	</div>
	<form method="POST" action="?/create">
		<div class= 'gridR'>
			<div class='child2'>
					<Input size="sm" placeholder="Santa Monica, CA" name="city"/>
			</div>
			<div class='child2'>
				<Input size="sm" placeholder="CA" name="state"/>
			</div>
			<div class='child2'>
				<Input size="sm" placeholder="Software Engineer" name="title"/>
			</div>
			<div class='child2'>
					<Input size="sm" placeholder="Google" name="company" />
				</div>
			<div class='child2'>
					<Input size="sm" placeholder="110000" name="salary" />
				</div>
			<div class='child2'>
					<Input size="sm" placeholder="10000" name="bonus" />
				</div>
			<div class='child2'>
					<Input size="sm" placeholder="5000" name="relocation" />
				</div>
			<div class='child2'>
					<Input size="sm" placeholder="5000" name="rsu"/>
			</div>
		</div>
		<div class= 'submitButton'>
			<button formaction="?/create" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
		</div>
	</form>
</main>


<style>
	.title {
		position: absolute;
		top: 100px;
		left:60px;
	}
	.gridL {
		position: absolute;
		top: 200px;
		left: 60px;
		display: grid;
	}
	.gridR {
		position: absolute;
		top: 200px;
		left: 210px;
		display: grid;
	}
	
	.gridL .child1 {
		margin-top: 15px;
		width: 100%;
		height: 50%;
	}
	.gridR .child2 {
		margin-top: 9px;
		width: 100%;
		height: 50%;
	}
	.submitButton {
		position: absolute;
		top: 550px;
		left: 500px;
	}
	


</style>
