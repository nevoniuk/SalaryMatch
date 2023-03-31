import type { Action, Actions, RequestEvent} from "@sveltejs/kit";
import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({request} : RequestEvent) => {
		const data = await request.formData();
		const city = data.get('city');
		const company = data.get('company');
		const salary = data.get('salary');
		const bonus = data.get('bonus');
		const relocation = data.get('relocation');
		const title = data.get('title');
		const state = data.get('state');
		const rsu = data.get('rsu');

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
				"Authorization": "Bearer " + data.get('userID')
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
		}).then(res => res.json());

		return { success: true };
	}
};