<script lang="ts">
	import { Heading, P, A, Label, Input, Button } from 'flowbite-svelte'
	import { onMount } from 'svelte';
	import { each } from 'svelte/internal';
	import { get } from 'svelte/store'
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

	export let data;
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

    let comparisonResult:JobOfferComparison = null;
	let comparisonKeys = [];

    let sendOffer = () => {
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

		comparisonKeys = Object.keys(comparisonResult);
		comparisonKeys = comparisonKeys.map((key) => key.substring(6));
		comparisonKeys = [...new Set(comparisonKeys)];
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
					<section>
						<div class= "titleAndEdit">
							<div class="offeritem">
								<p>
									Title: {offer.title}
								</p>
							</div>
						</div>
						<div class="offeritem">
							<p>
								Company: {offer.company}
							</p>
						</div>
						<div class="offeritem">
							<p>
								Location: {offer.city_id}, {offer.state_id}
							</p>
						</div>
						<div class="offeritem">
							<p>
								Salary: {offer.salary}
							</p>
						</div>
						<div class="offeritem">
							<p>
								Sign-on bonus: {offer.signing_bonus}
							</p>
						</div>
						<div class="offeritem">
							<p>
								Relocation Bonus: {offer.relocation_bonus}
							</p>
						</div>
                        <input type=checkbox bind:checked={offerChecked[offer.id]} on:change={() => {onOfferSelected(offer)}}/>
					</section>
				{/each}
			{/await}
		</div>
        <div>
            {#if offerOne != null && offerTwo != null}
                <Button on:click={sendOffer}>Compare Job Offers</Button>
            {/if}
        </div>

        <div>
            {#if comparisonResult != null}
				{#each comparisonKeys as comparisonKey}
					<div class="comparison-row">
						<div class="comparison-column">
							<p>{comparisonKey}</p>
						</div>
						<div class="comparison-column">
							<p>{comparisonResult["offer1" + comparisonKey]}</p>
						</div>
						<div class="comparison-column">
							<p>{comparisonResult["offer2" + comparisonKey]}</p>
						</div>
					</div>
				{/each}
            {/if}
        </div>

	</div>

	
</main>

<style>
    .comparison-row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 80vw;
		background-color: rgb(255, 255, 255);
    }
    .comparison-column {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
		padding: 4px;
		padding-left: 15px;
		padding-right: 8px;
    }

	.material-symbols-outlined {
        font-size: 20px;
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
	
	section {
		background-color: rgb(188, 181, 223);
		border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(34, 17, 66,0.4);
		margin-right: 15px;
		min-width: 20vw;
		height: 30vh;
		scroll-snap-align: start;
		text-align: center;
		position: relative;
		
	}
	.offeritem {
		color:black;
	}
	.orange-hover:hover {
        border-radius: 10px;
        background-color: #FFC187;
    }
	.titleAndEdit {
		display:flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.material-symbols {
		font-size: 20px;
	}
</style>
