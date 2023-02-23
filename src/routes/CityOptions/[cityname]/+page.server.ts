import type {PageServerLoad} from './$types'

export const load: PageServerLoad  = async ({ fetch, params}) => {
	const response = await fetch(`https://salarymatch.azurewebsites.net/api/cities`);
	const data  = await response.json();
	let id = "";
	for (let entry of data) {
		if (entry.name === params.cityname) {
			id = entry.id;
		}
	}
	const fetchDem = async (id: string) => {
		let url = 'https://salarymatch.azurewebsites.net/api/cities/' + id;
		const responseDem = await fetch(url);
		if (responseDem.status !== 200) {
			throw new Error(`There was an error with status code ${responseDem.status}`)
		  }
		const demdata  = await responseDem.json();
		return demdata;
	}
	return { demData: fetchDem(id)};
  }

