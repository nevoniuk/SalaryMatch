import type { Action, Actions, RequestEvent} from "@sveltejs/kit";
import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({request} : RequestEvent) => {
		// TODO create job offer
		console.log("created");
		const data = await request.formData();
		const city = data.get('city');
		const company = data.get('company');
		const salary = data.get('salary');
		const bonus = data.get('bonus');
		const relocation = data.get('relocation');
		const title = data.get('title');
		const state = data.get('state');
		const rsu = data.get('rsu');
		console.log(company);
		console.log(city);
		if (!city) {
			return fail(400, { city, missing: true });
		}
		if (!company) {
			return fail(400, { company, missing: true });
		}
		if (!salary) {
			return fail(400, { salary, missing: true });
		}
		if (!bonus) {
			return fail(400, { bonus, missing: true });
		}
		if (!relocation) {
			return fail(400, { relocation, missing: true });
		}
		const post =  (await fetch(`https://salarymatch.azurewebsites.net/api/joboffers`),
		{
			method: 'POST',
			body: JSON.stringify({
				RSU: rsu,
				signing_bonus: bonus,
				relocation_bonus: relocation,
				title: title,
				salary: salary,
				company: company,
				city: city,
				state: state
			}),
			headers: {
						'Content-Type': 'application/json'
			}
		});
		console.log(post);
		return { success: true };
	}
};