import type {PageServerLoad} from './$types'
import {authToken} from '../../../auth';

export const load: PageServerLoad = async ({ fetch, params }) => {

	const response = await fetch(`https://salarymatch.azurewebsites.net/api/cities/${params.cityID}`);
    const cityJson = await response.json();

    const reviewResponse = await fetch("https://salarymatch.azurewebsites.net/api/cities/" + params.cityID + "/reviews", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken
        },
    });
    const reviewJson = await reviewResponse.json();

    return {city: cityJson, reviews: reviewJson};
}