<script>
	import { Heading, Label, Input, Popover, ButtonGroup, InputAddon } from 'flowbite-svelte'
	import { page } from '$app/stores';
	import {authToken} from '../../../auth'
	let url = 'https://salarymatch.azurewebsites.net/api/joboffers';
	async function loading() {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": "Bearer " + $authToken
			}
		});
		const data  = await response.json();
		for (let i = 0; i < data.length; i++) {
			if (data[i].id == $page.params.offerID) {
				return data[i];
			}
		}
		console.log(data);
		return data;
	}
	
</script>

<form method="POST" action="?/update">
	{#await loading() then data}
		<div class="flex-col w-1/2 align-center mx-auto">
			<div class='title'>
				<Heading tag="h2" customSize="text-3xl font-bold ">Please Enter Your Updated Job Details Below</Heading>	
			</div>
			<!-- Hidden to pass to formAction -->
			<Input size="sm" type="hidden" value={$authToken} name="userID"/>
			<Input size="sm" type="hidden" value={$page.params.offerID} name="id"/>
		
			<div class="mb-5">
				<Label for="small-input" class="block mb-2 w-fit" id="city">City</Label>
				<Input size="sm" placeholder="Santa Monica" name="city" value={data.city} required/>
			</div>
			<div class="mb-5">
				<Label for="small-input" class="block mb-2 w-fit" id="state">State</Label>
				<Input size="sm" placeholder="California" name="state" value={data.state} required/>
			</div>
			<div class="mb-5">
				<div>
					<Label for="small-input" class="block mb-2 w-fit" id="title">Official Title</Label>
					<Popover class="w-64 text-sm font-light" title="Official Title" triggeredBy="#title">The official title of your position as listed on your offer letter.</Popover>
				</div>
				<Input size="sm" placeholder="Hiring Manager" name="title" value={data.title} required/>
			</div>
			<div class="mb-5">
				<Label for="small-input" class="block mb-2 w-fit" id="company">Company Name</Label>
				<Input size="sm" placeholder="Google" name="company" value={data.company} required/>
			</div>
			<div class="mb-5">
				<div>
					<Label for="small-input" class="block mb-2 w-fit" id="salary">Base Salary</Label>
					<Popover class="w-64 text-sm font-light" title="Base Salary" triggeredBy="#baseSalary">The annual salary listed on the offer letter. This does not include stocks, RSUs, bonuses, or reimbursements.</Popover>
				</div>
				<ButtonGroup class="w-full">
					<InputAddon>$</InputAddon>
					<Input type="number" size="sm" placeholder="60000" name="salary" value={data.salary} required/>
				</ButtonGroup>
			</div>
			<div class="mb-5">
				<div>
					<Label for="small-input" class="block mb-2 w-fit" id="bonus">Bonuses</Label>
					<Popover class="w-64 text-sm font-light" title="Bonuses" triggeredBy="#bonus">The combined monetary amount of bonuses such as signing, returning employee, and so on.</Popover>
				</div>
				<ButtonGroup class="w-full">
					<InputAddon>$</InputAddon>
					<Input type="number" size="sm" placeholder="2500" value={data.bonus} name="bonus"/>
				</ButtonGroup>
			</div>
			<div class="mb-5">
				<div>
					<Label for="small-input" class="block mb-2 w-fit" id="relocation">Relocation</Label>
					<Popover class="w-64 text-sm font-light" title="Relocation" triggeredBy="#relocation">The cash equivalent amount of assistance provided with relocating for the job.</Popover>
				</div>
				<ButtonGroup class="w-full">
					<InputAddon>$</InputAddon>
					<Input type="number" size="sm" placeholder="1000" value={data.relocation} name="relocation"/>
				</ButtonGroup>
			</div>
			<div class="mb-5">
				<div>
					<Label for="small-input" class="block mb-2 w-fit" id="rsu">Restricted Stock Units (RSU)</Label>
					<Popover class="w-64 text-sm font-light" title="Restricted Stock Units (RSU)" triggeredBy="#rsu">Amount of stock vested to you after 12 months. <a class="text-blue-400" href="https://en.wikipedia.org/wiki/Restricted_stock">Wikipedia</a></Popover>
				</div>
				<ButtonGroup class="w-full">
					<InputAddon>$</InputAddon>
					<Input type="number" size="sm" placeholder="5000" value={data.rsu} name="rsu"/>
				</ButtonGroup>
			</div>
		<button formaction="?/update" class="py-2 px-5 m-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Submit</button>
	</div>
	{/await}
</form>