<script>
	import { fly } from 'svelte/transition';
	import { Button, Accordion, AccordionItem } from 'flowbite-svelte';

	const _mainWords = ['$alary', 'Rent', 'Tax', 'Food', 'Gym', 'Community', 'City'];
	let _mainWordsIndex = 0;
	let _mainWord = '$alary';

	setInterval(() => {
		_mainWordsIndex = (_mainWordsIndex + 1) % _mainWords.length;
		_mainWord = _mainWords[_mainWordsIndex];
	}, 5000)

	const _dataSources = [
		{ title: "Restaurants", icon: "https://cdn-icons-png.flaticon.com/512/308/308556.png", urls: ["https://www.wallethub.com/edu/best-foodie-cities/7522"] },
		{ title: "Company Demographics", icon: "https://cdn-icons-png.flaticon.com/512/5835/5835234.png", urls: ["https://www.visualcapitalist.com/visualizing-diversity-tech-industry/"] },
		{ title: "School Rankings", icon: "https://cdn-icons-png.flaticon.com/512/3074/3074058.png", urls: ["https://www.worldpopulationreview.com/state-rankings/public-school-rankings-by-state"] },
		{ title: "Weather Trends", icon: "https://cdn-icons-png.flaticon.com/512/2932/2932445.png", urls: ["https://www.weatherapi.com/"] },
		{ title: "Crime", icon: "https://cdn-icons-png.flaticon.com/512/3208/3208803.png", urls: ["https://www.ucr.fbi.gov/crime-in-the-u.s/2019/crime-in-the-u.s.-2019/tables/table-8/table-8.xls/view"] },
		{ title: "Cannabis", icon: "https://cdn-icons-png.flaticon.com/512/2160/2160434.png", urls: ["https://www.ncsl.org/health/state-medical-cannabis-laws"] },
		{ title: "Abortion", icon: "https://cdn-icons-png.flaticon.com/512/7214/7214915.png", urls: ["https://www.reproductiverights.org/maps/abortion-laws-by-state/"] },
		{ title: "Life Expectancy", icon: "https://cdn-icons-png.flaticon.com/512/5141/5141209.png", urls: ["https://www.countyhealthrankings.org/explore-health-rankings/county-health-rankings-model/health-outcomes/length-of-life/life-expectancy?year=2023"] },
		{ title: "Taxes", icon: "https://cdn-icons-png.flaticon.com/512/4334/4334610.png", urls: ["https://taxfoundation.org/2022-sales-tax-rates-midyear/"] },
		{ title: "Internet", icon: "https://cdn-icons-png.flaticon.com/512/748/748151.png", urls: ["https://www.broadbandsearch.net/blog/internet-cost-by-state"] },
		{ title: "Rent, Utilities, Population, Groceries", icon: "https://cdn-icons-png.flaticon.com/512/2590/2590451.png", urls: ["https://www.census.gov/programs-surveys/ahs.html"] }
	]
</script>

<svelte:head>
	<title>Home</title>
	<meta name="SalaryMatch" content="Personalize your offer comparison." />
</svelte:head>

<div class="flex flex-col h-full gap-4">
	<div class="flex flex-row">
		<div class="text-[90rem] absolute -z-50 rotate-[30deg] -translate-y-[40rem] text-sm-orange/50">$</div>
		<div class="flex flex-col ml-[50%] h-screen gap-6 justify-center">
			<!-- Fancy Slider! -->
			<div class="flex flex-row text-5xl font-bold gap-4">
				<div>How does your</div>
				<div class="flex flex-row gap-0 font-inter font-extrabold">
					<div class="bg-sm-orange border-pink-500 rounded -translate-y-2">
						{#key _mainWord}
						<div in:fly="{{ y: -20, duration: 2000 }}" class="text-white m-2">{_mainWord}</div>
						{/key}
					</div>
					<div class="text-sm-orange">Match</div>
				</div>
				<div>up?</div>
			</div>
			<!-- Buttons -->
			<div class="flex flex-row">
				<a href="/login">
					<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-sm-orange to-red-500 group-hover:from-sm-orange group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
						<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
							Let's find out.
						</span>
					</button>
				</a>
			</div>
		</div>
	</div>
	<div class="flex flex-row align-middle">
		<div class="h-[10rem] ml-[35%] text-9xl text-transparent bg-clip-text bg-gradient-to-r from-sm-orange/50 to-sm-orange">alaryMatch</div>
		<img src="/sm-logo-big.png" alt="" class="max-w-[100px] max-h-[100px] translate-y-3">
	</div>
	<div class="flex flex-col text-4xl m-[5%] gap-5">
		<div>Freshly picked data.</div>
		<Accordion>
			{#each _dataSources as dataSource}
				<AccordionItem>
					<span slot="header" class="text-base flex gap-2">
						<img src={dataSource.icon} alt="" class="w-6 h-6" />
						<span>{dataSource.title}</span>
					</span>
					<p class="text-base">We sourced our {dataSource.title} data from
						{#each dataSource.urls as url}
							<a class="text-blue-500" href={url}>{url}</a>.
						{/each}
					</p>
				</AccordionItem>
  			{/each}
		</Accordion>
	</div>
	<div class="customerSupport">
		<Button outline gradient color="purpleToBlue">
			Need Help?<a href="/customerSupport"><span class="material-symbols-outlined orange-hover">contact_support</span></a>
		</Button>
	</div>
</div>

<style>
	.customerSupport {
		margin-left: 1100px;
	}
</style>
