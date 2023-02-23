import type {PageServerLoad} from './$types'
type JobOffer = {
	id: string;
    RSU: string;
    signing_bonus: string;
    relocation_bonus: string;
    title: string;
    salary: string;
    company: string;
    city: string;
    state: string;
};
export const load: PageServerLoad  = async ({ fetch}) => {
	const response = await fetch(`https://salarymatch.azurewebsites.net/api/joboffers`);
	const data  = await response.json();
	//TODO get user ID
	const userID = "100";
	let jobOffers: JobOffer[] = [];
	for (let entry of data) {
		if (entry.id === userID) {
			console.log(entry);
			jobOffers.push(entry);
		}
	}
	return { jobOfferData: jobOffers};
  }