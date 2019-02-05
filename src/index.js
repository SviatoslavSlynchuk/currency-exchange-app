import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import { getCurrencyData, setCurrencyData } from './actions/currencyActions';
import { setInitialData } from './actions/exchangeActions';
import DataApi from './api/DataApi';
import * as constants from './constants';
import Helpers from './helpers';

const store = configureStore();
store.dispatch(getCurrencyData());
DataApi.getLatestCurrencyData(constants.USD).then((data) => {
    store.dispatch(setCurrencyData(data));
    store.dispatch(setInitialData(Helpers.formatInitialExchangeData(data)));
});

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root'),
);
