import type { Action, Actions, RequestEvent} from "@sveltejs/kit";
import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({request} : RequestEvent) => {
		const data = await request.formData();
		const firstname = data.get('firstname');
		const lastname = data.get('lastname');
		const email = data.get('email');
		const message = data.get('message');
		if (!firstname) {
			return fail(400, { firstname, missing: true });
		}
		if (!lastname) {
			return fail(400, { lastname, missing: true });
		}
		if (!email) {
			return fail(400, { email, missing: true });
		}
		if (!message) {
			return fail(400, { message, missing: true });
		}
		const post =  await fetch(`https://salarymatch.azurewebsites.net/api/userfeedback`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				first_name: firstname,
				last_name: lastname,
				email: email,
		        message: message
			})
		}).then((res) => {
			if (res.status != 200) {
				res.json();
			}
            
    });
		return { success: true };
	}
};