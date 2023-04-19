<script lang="ts">
    import {authToken} from '../../auth'
    import { Heading, Button, Card } from 'flowbite-svelte'
    import { onMount } from 'svelte';
    import axios from 'axios';

    let cities = [];
    const getCities = async () => {
        const res = await axios.get(`https://salarymatch.azurewebsites.net/api/cities`);
        cities = res.data;
    }
    onMount(getCities);
    
    var offerChecked = {};
    let offerSelected = null;
    let cityExists = false;
    let updatedComp = 0;
    let comparisonResult:any = null;
    let usertotalcomp = 0;
    let submit = false;
    let loadedAverage = false;
    let url = 'https://salarymatch.azurewebsites.net/api/joboffers';
    let cityURL = '';

    async function loadingOffers() {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + $authToken
            }
        });
        const data  = await response.json();
        return data;
    }

    async function loadingCityData() {
        const response = await fetch(cityURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + $authToken
            }
        });
        const data  = await response.json();
        updatedComp = usertotalcomp - 12 * (data.average_rent + data.average_groceries_cost * 8 + data.average_utility_cost);
        return data;
    }

    let onOfferSelected = (offer) => {
        cityExists = false;
        loadedAverage = false;
        submit = false;

        if (offerChecked[offer.id] == false) {
            offerSelected = null;
            return;
        }

        offerChecked = {};
        offerChecked[offer.id] = true;
        offerSelected = offer;
    };

    
    
    let obtainAverage = async () => {
        var url = "https://salarymatch.azurewebsites.net/api/joboffers/" + offerSelected.id + "/aggregate"
        submit = true;
        let result = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + $authToken
            }
        });
        
        comparisonResult = {
            sameCityAvgTotalCompensation: 1.0,
            sameCompanyAvgTotalCompensation: 1.0,
            sameCityAvgTotalCompensationWithLivingCosts: 1.0,
            sameCompanyAvgTotalCompensationWithLivingCosts: 1.0
        };
        comparisonResult = await result.json();
        usertotalcomp = offerSelected.salary + offerSelected.RSU + offerSelected.relocation_bonus + offerSelected.signing_bonus;
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name == offerSelected.city_id) {
                cityURL = 'https://salarymatch.azurewebsites.net/api/cities/' + cities[i].id;
                cityExists = true;
            }
        }
        loadedAverage = true;
    }

</script>



<main>
    <div class = 'title'>
        <Heading tag="h2" customSize="text-3xl font-bold ">Compare Your Job Offers</Heading>    
    </div>
    <div class = 'subtitle'>
        <Heading tag="h6" customSize="text-lg font-normal ">Select An Offer to Compare</Heading>    
    </div>
    <div  class= "slidercontainer">
        <div class="slider">
            {#await loadingOffers() then data}
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
            {#if offerSelected != null}
                <Button on:click={obtainAverage}>Compare Job Offer</Button>
            {/if} 
        </div>
    </div>
    {#if submit != false}
        <div class="info">
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">"✓" indicates your offer is greater than the average</p>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">"x" indicates your offer is less than the average or there is no average data available for the offer city or company</p>
        </div>
        <br>
        <div class="card-container">
            <div class="flex-container">
                <div class="card">
                    
                        <div class = 'container'>
                            <div class = 'title-2'>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{offerSelected.city_id} Comparison</h5>
                            </div>
                            <div class = 'sub-container'>
                                <div class = 'leftitem' >
                                    <Heading tag="h3" customSize="text-l font-bold ">Your Offer Compensation</Heading>
                                </div>
                                <div class = 'rightitem'>
                                    <Heading tag="h3" customSize="text-l font-bold ">Average Compensation</Heading>
                                </div>
                            </div>
                            <div class = 'sub-container'>
                                {#if loadedAverage == true}
                                    <div class = 'leftitem'>
                                        <Heading tag="h3" customSize="text-l font-bold ">{usertotalcomp}</Heading>
                                        <p style="margin-left: 5px;">{usertotalcomp > comparisonResult.sameCityAvgTotalCompensation? "✓" : "x"}</p>
                                    </div>
                                    {#if comparisonResult.sameCityAvgTotalCompensation != usertotalcomp}
                                        <div class = 'rightitem'>
                                            <Heading tag="h3" customSize="text-l font-bold ">{comparisonResult.sameCityAvgTotalCompensation}</Heading>
                                        </div>
                                    {:else}
                                        <div class = 'rightitem'>
                                            <Heading tag="h3" customSize="text-l font-bold">No Available Data For {offerSelected.city_id}
                                            </Heading>
                                        </div>
                                    {/if}
                                {/if}
                            </div>
                            {#if cityExists == true}
                                {#await loadingCityData() then data}
                                    <div class = 'sub-container'>
                                        <div class = 'leftitem' style="margin-left: 25px;">
                                            <Heading tag="h3" customSize="text-l font-bold ">Your Offer Compensation with Living Costs</Heading>
                                        </div>
                                        <div class = 'rightitem'>
                                            <Heading tag="h3" customSize="text-l font-bold ">Average Compensation with Living Costs</Heading>
                                        </div>
                                    </div>
                                    <div class = 'sub-container'>
                                            <div class = 'leftitem'>
                                                <Heading tag="h3" customSize="text-l font-bold ">{Math.round(updatedComp)}</Heading>
                                                <p style="margin-left: 5px;">{updatedComp > comparisonResult.sameCityAvgTotalCompensationWithLivingCosts? "✓" : "x"}</p>
                                            </div>
                                            {#if comparisonResult.sameCityAvgTotalCompensationWithLivingCosts != updatedComp}
                                                <div class = 'rightitem'>
                                                    <Heading tag="h3" customSize="text-l font-bold ">{Math.round(comparisonResult.sameCityAvgTotalCompensationWithLivingCosts)}</Heading>
                                                </div>
                                            {:else}
                                                <div class = 'rightitem'>
                                                    <Heading tag="h3" customSize="text-l font-bold ">No Available Data For {offerSelected.city_id}
                                                    </Heading>
                                                </div>
                                            {/if}
                                    </div>
                                {/await}
                            {/if}
                            
                        </div>
                        
                </div>
                <div class="card">
                    <div class = 'container'>
                        <div class = 'title-2'>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{offerSelected.company} Comparison</h5>
                        </div>
                        <div class = 'sub-container'>
                            <div class = 'leftitem'>
                                <Heading tag="h3" customSize="text-l font-bold ">Your Offer Compensation</Heading>
                            </div>
                            <div class = 'rightitem'>
                                <Heading tag="h3" customSize="text-l font-bold ">Average Compensation</Heading>
                            </div>
                        </div>
                        <div class = 'sub-container'>
                            {#if loadedAverage == true}
                                <div class = 'leftitem'>
                                    <Heading tag="h3" customSize="text-l font-bold ">{usertotalcomp}</Heading>
                                    <p style="margin-left: 5px;">{usertotalcomp > comparisonResult.sameCompanyAvgTotalCompensation? "✓" : "x"}</p>
                                </div>
                                {#if comparisonResult.sameCompanyAvgTotalCompensation != usertotalcomp}
                                    <div class = 'rightitem'>
                                        <Heading tag="h3" customSize="text-l font-bold ">{comparisonResult.sameCompanyAvgTotalCompensation}</Heading>
                                    </div>
                                {:else}
                                    <div class = 'rightitem'>
                                        <Heading tag="h3" class = " text-gray-900 dark:text-red-800" customSize="text-l font-bold">No Available Data for {offerSelected.company}
                                        </Heading>
                                    </div>
                                {/if}
                            {/if}
                        </div>
                        {#if cityExists == true}
                            {#await loadingCityData() then data}
                                <div class = 'sub-container'>
                                    <div class = 'leftitem' style="margin-left: 25px;">
                                        <Heading tag="h3" customSize="text-l font-bold ">Your Offer Compensation with Living Costs</Heading>
                                    </div>
                                    <div class = 'rightitem'>
                                        <Heading tag="h3" customSize="text-l font-bold ">Average Compensation with Living Costs</Heading>
                                    </div>
                                </div>
                                <div class = 'sub-container'>
                                        <div class = 'leftitem'>
                                            <Heading tag="h3" customSize="text-l font-bold ">{Math.round(updatedComp)}</Heading>
                                            <p style="margin-left: 5px;">{updatedComp > comparisonResult.sameCompanyAvgTotalCompensation? "✓" : "x"}</p>
                                        </div>
                                        {#if comparisonResult.sameCompanyAvgTotalCompensation != updatedComp}
                                            <div class = 'rightitem'>
                                                <Heading tag="h3" customSize="text-l font-bold ">{Math.round(comparisonResult.sameCompanyAvgTotalCompensation)}</Heading>
                                            </div>
                                        {:else}
                                            <div class = 'rightitem'>
                                                <Heading tag="h3" customSize="text-l font-bold ">No Available Data for {offerSelected.company}</Heading>
                                            </div>
                                        {/if}
                                </div>
                            {/await}
                        {/if}
                        
                    </div>
            </div>
            </div>
        </div>
    {/if}
</main>

<style>
   
    .title {
            position: absolute;
            top: 100px;
            left:10px;
    }
    .title-2 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 30px;
    }

    .info {
        width: 300px;
        position: absolute;
        left: 700px;
        top: 600px;
        border-radius: 5px;
        background-color: rgb(240, 240, 240);
        box-shadow: 2px 2px 2px 0px rgba(77, 77, 77, 0.4);
        z-index: 10;
        height: 100px;
        padding: 5px;
        font-size: 15px;
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
    
    .card-container {
        top:690px;
        left: 100px;
        width: 100%;
        position: absolute;
    }

    .flex-container {
        display: flex;
        position: absolute;
        scroll-snap-type: y mandatory;  
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
    }

    .card {
        flex: 1;
        width: 400px;
        height: 450px;
        background-image: linear-gradient(to right, rgb(188, 181, 223), white);
        border-radius: 4px;
        box-shadow: 1px 1px 3px 0px rgba(34, 17, 66,0.4);
        padding: 15px;
    
        
    }

    .card:first-child {
        margin-right: 40px;
    }
    
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .sub-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 30px;
        
    }

    .leftitem {
        margin-left: 25px;
        display:flex;
        flex-direction: row;
    }

    .rightitem {
        margin-left: 100px;
        justify-content: center;
    }
</style>

