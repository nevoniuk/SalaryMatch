import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({ fetch, params }) => {

	const response = await fetch(`https://salarymatch.azurewebsites.net/api/states/${params.stateName}`);
    const stateJson = await response.json();

    // find state name
	const fullStatesResponse = await fetch(`https://salarymatch.azurewebsites.net/api/states`);
	const fullStates = await fullStatesResponse.json();
    const displayName = fullStates.find(element => element.id == params.stateName).name;
    stateJson.name = displayName;

    return {state: stateJson};
}