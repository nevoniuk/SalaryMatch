<script>
	import { Button,Chevron, Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte'
	import { Heading, P, A, Label, Input } from 'flowbite-svelte'
	import { page } from '$app/stores';
	export let form;
	import {authToken} from '../../../auth'
	async function loading() {
		const response = await fetch(`https://salarymatch.azurewebsites.net/api/joboffers`);
		const data  = await response.json();
		for (let i = 0; i < data.length; i++) {
			if (data[i].id == $page.params.offerID) {
				return data[i];
			}
		}
		return data;
	}
</script>

<svelte:head>
	<title>Update Job Offer Page</title>
	<meta name="description" content="Form to Input Job Offer" />
</svelte:head>
 
<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Update Your Offer</Heading>	
	</div>
	<div class= 'gridL'>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>City</Label>
			</div>
		<div class='child1'>
				<Label for='small-input' class='block mb-2'>State</Label>
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
	<form method="POST" action="?/update">
		<div class= 'gridR'>
			{#await loading() then data}
				<div class='child2'>
					<Input size="sm" placeholder="{data.city}" name="city"/>
				</div>
				<div class='child2'>
					<Input size="sm" placeholder="{data.state}" name="state"/>
				</div>
				<div class='child2'>
					<Input size="sm" placeholder="{data.title}" name="title"/>
				</div>
				<div class='child2'>
						<Input size="sm" placeholder="{data.company}" name="company" />
					</div>
				<div class='child2'>
						<Input size="sm" placeholder="{data.salary}" name="salary" />
					</div>
				<div class='child2'>
						<Input size="sm" placeholder="{data.signing_bonus}" name="bonus" />
					</div>
				<div class='child2'>
						<Input size="sm" placeholder="{data.relocation_bonus}" name="relocation" />
					</div>
				<div class='child2'>
						<Input size="sm" placeholder="{data.RSU}" name="rsu"/>
				</div>
				<div class='child2'>
						<Input size="sm" type="hidden" value={$authToken} name="userID"/>
				</div>
				<div class='child2'>
						<Input size="sm" type="hidden" value={$page.params.offerID} name="id"/>
				</div>
			{/await}
		</div>
		<div class= 'submitButton'>
			<button formaction="?/update" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
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
