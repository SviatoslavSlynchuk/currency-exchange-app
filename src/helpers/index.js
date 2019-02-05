import * as constants from '../constants';

export default class Helpers {
    static formatCurrencyValue(currencyValue) {
        try {
            return Number.parseFloat(currencyValue).toFixed(constants.CURRENCY_BASE);
        } catch(err) {
            console.warn('Invalid value was provided as a currency');
            return currencyValue;
        }
    }

    static formatInitialExchangeData(data) {
        try {
            let exchangeObj = {
                firstCurrency: data.base,
                firstValue: constants.DEFAULT_EXCHANGE_VALUE,
                secondCurrency: data.base === constants.ILS ? constants.USD : constants.ILS,
                secondValue: constants.DEFAULT_EXCHANGE_VALUE * (data.base === constants.ILS
                    ?  (data.rates[constants.USD] || 1)
                    : (data.rates[constants.ILS] || 1)),
            };
            return exchangeObj;
        } catch (e) {
            throw 'Invalid data object passed to formatInitialExchangeData()';
        }
    }
}
