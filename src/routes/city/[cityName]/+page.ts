export const load = async ({ fetch, params }) => {
    const response = await fetch("https://dummyjson.com/products/1");
    // const response = await fetch("https://salarymatch.azurewebsites.net/api/cities");
    console.log(response);

    return {cityName: params.cityName};
}