import type {PageServerLoad} from './$types'

export const load: PageServerLoad  = async ({ fetch, params}) => {
	const response = await fetch(`https://salarymatch.azurewebsites.net/api/cities`);
	const data  = await response.json();
	let id = "";
	console.log("parameter name")
	console.log(params.cityname);
	for (let entry of data) {
		if (entry.name === params.cityname) {
			id = entry.id;
			console.log("matching id")
			console.log(id);
			console.log(entry.name);
		}
	}
	//let obj: {cities: City[]} = { "cities": arr}
	const fetchDem = async (id: string) => {
		let url = 'https://salarymatch.azurewebsites.net/api/cities/demographics/' + id;
		const responseDem = await fetch(url);
		if (responseDem.status !== 200) {
			throw new Error(`There was an error with status code ${responseDem.status}`)
		  }
		const demdata  = await responseDem.json();
		return demdata;
	}
	return { demData: fetchDem(id)};
  }

