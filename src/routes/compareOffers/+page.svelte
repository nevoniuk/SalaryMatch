<script lang="ts">
	import { Heading, Button, Card } from 'flowbite-svelte'
	/** @type {import('./$types').PageData} */

    interface JobOfferComparison {
        offer1ID: string, offer2ID: string,
        offer1TotalCompensation: number,
        offer2TotalCompensation: number,
        offer1TotalCompensationWithLivingCosts: number,
        offer2TotalCompensationWithLivingCosts: number,
        offer1TemperatureMatch: boolean, 
        offer2TemperatureMatch: boolean, 
        offer1CityDemographicMatch: boolean, 
        offer2CityDemographicMatch: boolean, 
        offer1SalaryMatch: boolean,
        offer2SalaryMatch: boolean
    }

	import {authToken} from '../../auth'
	console.log($authToken);
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
		console.log(data);
		return data;
	}

    var offerChecked = {};

    let offerOne = null;
    let offerTwo = null;

	let setOfOffers = {};


    let onOfferSelected = (offer) => {
		setOfOffers[offer.id] = offer;

        if (offerChecked[offer.id] == false) {
			offerOne = null;
			offerTwo = null;
            return;
        }

        let keys = Object.keys(offerChecked);
        let otherOffer = null;

        keys.forEach(key => {
            if (key != offer.id && offerChecked[key] == true) {
                otherOffer = setOfOffers[key];
            }
        });

        offerChecked = {};

        offerChecked[offer.id] = true;
        if (otherOffer != null) {
            offerChecked[otherOffer.id] = true;
        }

        offerOne = otherOffer;
        offerTwo = offer;
    };

    let comparisonResult:any = null;
	let comparisonKeys = [];

    let sendOffer = async () => {

		console.log(authToken);

		let result = await fetch("https://salarymatch.azurewebsites.net/api/joboffers/compare", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				"Authorization": "Bearer " + $authToken
			},
			body: JSON.stringify({
				offer1ID: offerOne.id, offer2ID: offerTwo.id
			})
		});
        comparisonResult = {
            offer1ID: "o1ID",
            offer2ID: "o2ID",
            offer1TotalCompensation: 5500,
            offer2TotalCompensation: 8425,
            offer1TotalCompensationWithLivingCosts: 1305,
            offer2TotalCompensationWithLivingCosts: 2205,
            offer1TemperatureMatch: false,
            offer2TemperatureMatch: false,
            offer1CityDemographicMatch: true,
            offer2CityDemographicMatch: false,
            offer1SalaryMatch: false,
            offer2SalaryMatch: true,
        };

		comparisonResult = await result.json();
		console.log(comparisonResult);

		let rawComparisonKeys = Object.keys(comparisonResult);
		rawComparisonKeys.forEach(rawComparisonKey => {
			if (typeof comparisonResult[rawComparisonKey] == "boolean") {
				comparisonResult[rawComparisonKey] = comparisonResult[rawComparisonKey]? 1 : 0;
			}
		});
		comparisonKeys = rawComparisonKeys.map((key) => key.substring(6));
		comparisonKeys = [...new Set(comparisonKeys)];
		comparisonKeys.splice(comparisonKeys.indexOf("ID"), 1);
    };
</script>

<svelte:head>
	<title>Compare Job Offers Page</title>
</svelte:head>

<main>
	<div class = 'title'>
		<Heading tag="h2" customSize="text-3xl font-bold ">Compare Your Job Offers</Heading>	
	</div>
	<div class = 'subtitle'>
		<Heading tag="h6" customSize="text-lg font-normal ">Select Two Offers to Compare</Heading>	
	</div>
	<div  class= "slidercontainer">
		<div class="slider">
			{#await loading() then data}
				{#each data as offer}
					<Card class="flex-col justify-end bg-purple-300 mx-5 w-[500px] mb-0">
						<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title: {offer.title}</h5>
						<div class="mb-5 h-fit">
							<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Company: {offer.company}</p>
							<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Location: {offer.city_id}, {offer.state_id}</p>
							<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Base Salary: ${offer.salary}</p>
							<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Bonuses: ${offer.signing_bonus}</p>
							<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Relocation: ${offer.relocation_bonus}</p>
						</div>
	
                        <input type=checkbox bind:checked={offerChecked[offer.id]} on:change={() => {onOfferSelected(offer)}}/>
					</Card>
				{/each}
			{/await}
		</div>
		<br>
        <div>
            {#if offerOne != null && offerTwo != null}
                <Button on:click={sendOffer}>Compare Job Offers</Button>
            {/if}
        </div>
		<br>

        <div>
            {#if comparisonResult != null}
				{#each comparisonKeys as comparisonKey}
					<div class="comparison-row">
						<div class="comparison-column">
							<!-- add spaces to camel case-->
							<p>{comparisonKey.replace(/([A-Z])/g, ' $1').trim()}</p>
						</div>
						<div class="comparison-column">
							<p>{comparisonResult["offer1" + comparisonKey]}
							{comparisonResult["offer1" + comparisonKey] > comparisonResult["offer2" + comparisonKey]? "✓" : ""}</p>
						</div>
						<div class="comparison-column">
							<p>{comparisonResult["offer2" + comparisonKey]}
							{comparisonResult["offer2" + comparisonKey] > comparisonResult["offer1" + comparisonKey]? "✓" : ""}</p>
						</div>
					</div>
				{/each}
            {/if}
        </div>
		<br>
		<br>

	</div>

	
</main>

<style>
    .comparison-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 80vw;
		background-color: rgb(238, 242, 252);
		box-shadow: 3px 3px 9px 1px #06053f5c;
    }
    .comparison-column {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		padding: 8px;
		padding-left: 15px;
		padding-right: 8px;
    }
	.title {
			position: absolute;
			top: 100px;
			left:10px;
		}
	.subtitle {
		position: absolute;
		top: 250px;
		left:10px;
	}
	.slidercontainer {
		top:300px;
		position: absolute;
	}
	.slider {
		font-family: sans-serif;
		scroll-snap-type: x mandatory;	
		display: flex;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
		
	}
</style>
