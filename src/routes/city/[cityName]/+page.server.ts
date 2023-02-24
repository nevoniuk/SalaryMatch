import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({ fetch, params }) => {

	const response = await fetch(`https://salarymatch.azurewebsites.net/api/cities/${params.cityName}`);
    const cityJson = await response.json();

    return {city: cityJson};
}