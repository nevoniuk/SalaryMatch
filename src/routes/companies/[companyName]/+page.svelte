<script>
    import {authToken} from '../../../auth';
    import { Rating, Textarea, Button, Toolbar, ToolbarButton, Toggle, Card, Spinner } from 'flowbite-svelte';
    import PopulationBar from '../../city/[cityName]/PopulationBar.svelte';

    export let data;
    let is_anonymous = false;

    const meanRating = (data.companyReviews.length ? data.companyReviews.reduce((sum, review) => sum + review.overall_rating, 0) / data.companyReviews.length : 0).toFixed(2);
    const profanity = ["profanity", "IU"]

    let overall_rating = 1;
    let comment = "";

    let submitting = false;

    let onReview = async () => {
        var company_id = data.company.id;
        var url = "https://salarymatch.azurewebsites.net/api/companies/" + company_id + "/reviews";
        submitting = true;

        profanity.forEach((cuss) => comment = comment.replaceAll(cuss, "****"))

        const post = (await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + $authToken
            },
            body: JSON.stringify({
                overall_rating: overall_rating,
                comment: comment,
                is_anonymous: is_anonymous
            })
        }).then(async data => {
            if (data.status == 200||data.status == 201) {
                console.log("success");
            } else {
                console.log("fail");
                alert("Review Submission Failed")
            }
        }).finally(
            () => window.location.href = "/companies/" + company_id
        ).catch(err => console.log('err')));
    };
</script>

<div class="flex flex-col gap-12">
    <div>
        <h1 class="w-fit justify-start text-9xl">{data.company.name}</h1>
        <Rating total={5} rating={meanRating}>
            <span slot="ratingUp">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-blue-600 dark:text-blue-400" aria-label="star" fill="none" viewBox="0 0 24 24" stroke-width="2"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z" fill="currentColor"></path> </svg>
            </span>
            <span slot="ratingDown">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="text-gray-500 dark:text-blue-400" aria-label="star" fill="none" viewBox="0 0 24 24" stroke-width="2"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7881 3.2108C11.2364 2.13286 12.7635 2.13286 13.2118 3.2108L15.2938 8.21652L20.6979 8.64976C21.8616 8.74306 22.3335 10.1953 21.4469 10.9549L17.3295 14.4818L18.5874 19.7553C18.8583 20.8909 17.6229 21.7884 16.6266 21.1799L11.9999 18.354L7.37329 21.1799C6.37697 21.7884 5.14158 20.8909 5.41246 19.7553L6.67038 14.4818L2.55303 10.9549C1.66639 10.1953 2.13826 8.74306 3.302 8.64976L8.70609 8.21652L10.7881 3.2108Z" fill="currentColor"></path> </svg>
            </span>
            <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{meanRating} out of 5</p>
        </Rating>
    </div>
 
    <div>
        <form on:submit={onReview}>
            <Textarea class="mb-4" placeholder="Write a review" bind:value={comment}>
                <div slot="header" class="flex items-center justif-between">
                    <Toolbar embedded>
                        <div class="flex items-center">
                            {#each Array(5) as _, index}
                                <svg on:click={() => overall_rating = index + 1} aria-hidden="true" class="w-5 h-5 cursor-pointer {overall_rating > index ? "text-yellow-400" : "text-gray-500 dark:text-gray-500"}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            {/each}
                            <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{overall_rating} out of 5</p>
                        </div>
                    </Toolbar>
                </div>
                <div slot="footer" class="flex items-center justify-between">
                    {#if submitting}
                        <Button disabled>Posting...<Spinner class="ml-4" size="4" color="white"/></Button>
                    {:else}
                        <Button type="submit">Post comment</Button>
                    {/if}
                    <Toolbar embedded>
                        <ToolbarButton name="Anonymous" class="cursor-pointer"><Toggle checked={is_anonymous} on:click={() => is_anonymous = !is_anonymous} class="ml-2 cursor-pointer">Post Anonymously</Toggle></ToolbarButton>
                    </Toolbar>
                </div>
            </Textarea>
        </form>
        <!-- <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="/" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p> -->
    </div>
    <h2 class="text-4xl">Reviews</h2>
    <div class="grid gap-2 grid-cols-5">
        {#each data.companyReviews as { user_id, overall_rating, comment}}
            <Card>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">{user_id}</h5>
                <Rating total={5} rating={overall_rating} class="mb-5">
                    <p slot="text" class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{overall_rating} out of 5</p>
                </Rating>
                <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{comment}</p>
        </Card>
        {/each}
    </div>

    <Card>
        <p class="text-xl font-bold">Demographics</p>
        <PopulationBar subsetName="Caucasian" subsetTotal={data.company.percent_caucasian} total={100} showSubsetTotal={false} />
        <PopulationBar subsetName="Asian" subsetTotal={data.company.percent_asian} total={100} showSubsetTotal={false} />
        <PopulationBar subsetName="Latino" subsetTotal={data.company.percent_latino} total={100} showSubsetTotal={false} />
        <PopulationBar subsetName="Black" subsetTotal={data.company.percent_black} total={100} showSubsetTotal={false} />
        <PopulationBar subsetName="Male" subsetTotal={data.company.percent_male} total={100} showSubsetTotal={false} />
        <PopulationBar subsetName="Female" subsetTotal={data.company.percent_female} total={100} showSubsetTotal={false} />
    </Card>
    <br>
    <!-- <PopulationBar subsetName="Black" subsetTotal={data.city.black_population} total={data.city.total_population} /> -->
    <!-- <PopulationBar subsetName="Native American" subsetTotal={data.city.native_american_population} total={data.city.total_population} /> -->
    <!-- <PopulationBar subsetName="Asian American" subsetTotal={data.city.asian_american_population} total={data.city.total_population} /> -->
    <!-- <PopulationBar subsetName="Pacific Islander" subsetTotal={data.city.pacific_islander_population} total={data.city.total_population} /> -->
    <!-- <PopulationBar subsetName="Hispanic" subsetTotal={data.city.hispanic_population} total={data.city.total_population} /> -->
</div>