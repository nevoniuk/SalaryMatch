import { CosmosClient } from "@azure/cosmos";
const endpoint = "https://salarymatch.documents.azure.com:443/";
const key = "54JSDpVJ9Q0ZtHxPJkCDCogbUqx20nPBcKOzRrD9i81lJglYOZqfKFIVsPdypRWY0wR4Mi9HIufZACDbGZFNIQ==";
const cosmosClient = new CosmosClient({ endpoint, key });
const databaseName = `contoso_${timeStamp}`;
const containerName = `products_${timeStamp}`;
const databaseId = "SalaryMatchDB";
const containerId = "JobOffers";
const database = client.database(databaseId);
const container = database.container(containerId);


module.exports = async function (context, req) {
    let jobOffer = {
        "name": req.query.name,
        "city": req.query.city
    };
    const { resource: createdItem } = await container.items.create(jobOffer);
    const responseMessage = "YAY successfully inserted job offer into database";
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}