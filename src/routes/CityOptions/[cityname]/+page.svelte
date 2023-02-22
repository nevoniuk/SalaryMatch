<script lang="ts">
	import { Button,Chevron, Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte'
	import { Heading, P, A, Label, Input } from 'flowbite-svelte'
	 /** @type {import('./$types').PageData} */
  	export let data;
	console.log(data);
	const { demData } = data;
</script>
<svelte:head>
	<title>City Search Page</title>
	<meta name="description" content="City Search Results View" />
</svelte:head>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Search Results For "CityName"</Heading>
	</div>
	<div class = "container">
		<div class = 'cityInfo'>
			<Button><Chevron>Demographics</Chevron></Button>
			<Dropdown class="w-600 overflow-y-auto py-1 h-48">
				<DropdownItem>Total Population: {demData.total_population}</DropdownItem>
				<DropdownItem>Caucasian Population: {demData.caucasian_population}</DropdownItem>
				<DropdownItem>Black Population: {demData.black_population}</DropdownItem>
				<DropdownItem>Native American Population{demData.native_american_population}</DropdownItem>
				<DropdownItem>Asian Population: {demData.asian_population}</DropdownItem>
				<DropdownItem>Pacific Islander Population: {demData.pacific_islander_population}</DropdownItem>
				<DropdownItem>Hispanic Population: {demData.hispanic_population}</DropdownItem>
				<DropdownItem>Population under 25: {demData.population_under_25}</DropdownItem>
				<DropdownItem>Population 25-29: {demData. population_25_to_29}</DropdownItem>
				<DropdownItem>Population 30-34: {demData.population_30_to_34}</DropdownItem>
				<DropdownItem>Population 35-44: {demData.population_35_to_44}</DropdownItem>
				<DropdownItem>Population 45-54: {demData.population_45_to_54}</DropdownItem>
				<DropdownItem>Population 55-64: {demData.population_55_to_64}</DropdownItem>
				<DropdownItem>Population 65-74: {demData.population_65_to_74}</DropdownItem>
				<DropdownItem>Population 75+: {demData.population_75_and_older}</DropdownItem>
				<DropdownItem>Male Population: {demData.male_population}</DropdownItem>
				<DropdownItem>Female Population: {demData.female_population}</DropdownItem>
			</Dropdown>
		</div>
	</div>
	
</main>

<style>
	
	.title {
			position: absolute;
			top: 100px;
			left:100px;
		}
	.container {
		position: absolute;
		display:flex;
		align-items: center;
		flex-direction: column;
		top:200px;
		bottom:0px;
		width:1000px;
		background-color: rgba(182, 148, 255, .2);
	}
	.cityInfo {
		width: 20%;
		margin-top: 100px;
		position:absolute;
	}
</style>
