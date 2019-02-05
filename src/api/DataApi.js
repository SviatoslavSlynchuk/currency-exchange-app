import fetch from 'isomorphic-fetch';
import * as constants from '../constants';

export default class DataApi {
    static getUrlString(endpoint) {
        return constants.DATA_URL + endpoint;
    }
    static getLatestCurrencyData(base) {
        const { BASE, LATEST, SYMBOLS } = constants;
        const availableCurrencies = constants.AVAILABLE_CURRENCIES.filter(item => item !== base);

        return fetch(DataApi.getUrlString(`${LATEST}?${BASE}${base}&${SYMBOLS}${availableCurrencies.join()}`)).then(
            response => response.json()
        );
    }
}
