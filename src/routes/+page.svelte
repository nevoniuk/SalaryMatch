<script>
	import { fly } from 'svelte/transition';
	import { Accordion, AccordionItem } from 'flowbite-svelte';

	const _mainWords = ['$alary', 'Rent', 'Tax', 'Food', 'Gym', 'Community', 'City'];
	let _mainWordsIndex = 0;
	let _mainWord = '$alary';

	setInterval(() => {
		_mainWordsIndex = (_mainWordsIndex + 1) % _mainWords.length;
		_mainWord = _mainWords[_mainWordsIndex];
	}, 5000)
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
			<AccordionItem>
				<span slot="header" class="flex gap-2 text-3xl text-green-500">
					<img src="https://cdn-icons-png.flaticon.com/512/2914/2914767.png" alt="" class="w-8 h-8">
					<span>Salaries</span>
				</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400 text-xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="flex gap-2 text-3xl text-red-500">
					<img src="https://cdn-icons-png.flaticon.com/512/846/846347.png" alt="" class="w-8 h-8">
					<span>Gas</span>
				</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400 text-xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="flex gap-2 text-3xl text-purple-500">
					<img src="https://cdn-icons-png.flaticon.com/512/5835/5835234.png" alt="" class="w-8 h-8">
					<span>Demographics</span>
				</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400 text-xl">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="flex gap-2 text-3xl text-blue-500">
					<img src="https://cdn-icons-png.flaticon.com/512/4334/4334610.png" alt="" class="w-8 h-8">
					<span>Taxes</span>
				</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400 text-xl">
					We gather our tax data from the 2022 sales tax rates from <a href="https://taxfoundation.org/2022-sales-tax-rates-midyear/" class="text-blue-500">taxfoundation.org</a>.
				</p>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="flex gap-2 text-3xl text-pink-500">
					<img src="https://cdn-icons-png.flaticon.com/512/2721/2721688.png" alt="" class="w-8 h-8">
					<span>Internet</span>
				</span>
				<p class="mb-2 text-gray-500 dark:text-gray-400 text-xl">
					This data is aggregated across data points from <a href="https://www.broadbandsearch.net/blog/internet-cost-by-state" class="text-blue-500">broadbandsearch.net</a>
					and <a href="https://broadbandnow.com/research/best-states-with-internet-coverage-and-speed" class="text-blue-500">braodbandnow.com</a>.
				</p>
	</AccordionItem>
		</Accordion>
	</div>
</div>