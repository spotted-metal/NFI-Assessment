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

/**
 * Get the market data for a given currency ID.
 * Relevant market statistics are current USD price
 * and the percentage change in USD price over the last 24 hours.
 */
async function getMarketData(id) {
    let uri =
        `https://data.messari.io/api/v1/assets/${id}/metrics/market-data`;
    let response = await fetch(uri);
    let payload = await response.json();
    let {status, data} = payload;

    if (status.error_code) {
        throw new Error(status.error_message);
    }

    return ({
        price: data.market_data.price_usd,
        percent_change: data.market_data.percent_change_usd_last_24_hours,
    })
}

export {getCurrencyData, getMarketData};