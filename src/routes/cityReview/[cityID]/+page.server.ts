 //will be the page for getting the reviews because we need a way to handle the parameters
import type { Action, Actions, RequestEvent} from "@sveltejs/kit";
import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */

export const actions = {
	ge: async ({request} : RequestEvent) => {
		const data = await request.formData();
		const userID = data.get('userID');
		console.log(userID);
		const anonymous = data.get('anonymous');
		console.log(anonymous);
		const city = data.get('city');
		console.log(city);
		const rating = data.get('rating');
		console.log(rating);
		const comment = data.get('comment');
		console.log(comment);
	
		if (!userID) {
			return fail(400, { userID, missing: true });
		}
		if (!city) {
			return fail(400, { city, missing: true });
		}
		if (!rating) {
			return fail(400, { rating, missing: true });
		}
		if (!comment) {
			return fail(400, { comment, missing: true });
		}
		
		const post =  await fetch(`https://salarymatch.azurewebsites.net/api/cities/`+ city + '/reviews',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				"Authorization": `Bearer ${userID}`
			},
			body: JSON.stringify({
				user_id: userID,
				is_anonymous: anonymous,
				city_id: city,
				overall_rating: rating,
				comment: comment
			})
		}).then((res) => {
			if (res.status != 200) {
				res.json();
			}
            
    });
		return { success: true };
	}
};