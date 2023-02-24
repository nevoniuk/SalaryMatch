import type { Action, Actions, RequestEvent} from "@sveltejs/kit";
import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({request} : RequestEvent) => {
		const data = await request.formData();
		const userID = data.get('userID');
		console.log(userID);
		const city = data.get('city');
		console.log(city);
		const company = data.get('company');
		console.log(company);
		const salary = data.get('salary');
		console.log(salary);
		const bonus = data.get('bonus');
		console.log(bonus);
		const relocation = data.get('relocation');
		console.log(relocation);
		const title = data.get('title');
		console.log(title);
		const state = data.get('state');
		console.log(state);
		const rsu = data.get('rsu');
		console.log(rsu);
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
		const post =  await fetch(`https://salarymatch.azurewebsites.net/api/joboffers`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${userID}`
			},
			body: JSON.stringify({
				RSU: rsu,
				signing_bonus: bonus,
				relocation_bonus: relocation,
				title: title,
				salary: salary,
				company: company,
				city_id: city,
				state_id: state
			})
		}).then((res) => {
			if (res.status != 200) {
				res.json();
			}
            
    });
		return { success: true };
	}
};