import { combineReducers } from 'redux';
import currency from './currencyReducer';
import misc from './miscReducer';
import exchange from './exchangeReducer';

const rootReducer = combineReducers({
    currency,
    misc,
    exchange,
});

export default rootReducer;
