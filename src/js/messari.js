/**
 * Get cryptocurrency data using the Messari API (https://messari.io/api).
 */

/**
 * Get the asset ID and name of a cryptocurrency using a given key.
 * According to the API, the asset ID is unique and will never change,
 * making it the most stable reference.
 */
async function getCurrencyData(str) {
    let uri = `https://data.messari.io/api/v1/assets/${str}`;
    console.log(uri);
    let response = await fetch(uri);
    let payload = await response.json();
    let {status, data} = payload;

    if (status.error_code) {
        throw new Error(status.error_message);
    }

    return ({
        id: data.id,
        name: data.name,
    });
}

export {getCurrencyData};