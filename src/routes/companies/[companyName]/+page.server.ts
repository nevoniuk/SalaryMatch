import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({ fetch, params }) => {

	const companyDetailsResponse = await fetch(`https://salarymatch.azurewebsites.net/api/companies/${params.companyName}`);
    const companyJson = await companyDetailsResponse.json();

    const companyReviewsResponse = await fetch(`https://salarymatch.azurewebsites.net/api/companies/${params.companyName}/reviews`);
    const companyReviewsJson = await companyReviewsResponse.json();

    const companyReviewsParsed = [];

    for (const companyReview of companyReviewsJson) {
        companyReviewsParsed.push({
            ...companyReview,
            user_id: companyReview.user_id === null ? "Anonymous" : companyReview.user_id
        })
    }

    return {company: companyJson, companyReviews: companyReviewsParsed};
}