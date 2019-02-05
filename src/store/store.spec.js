import configureStore from './configureStore';
import { setCurrencyData } from '../actions/currencyActions';

describe('Application state', () => {
    it('sets currency list into the store', () => {
        const store = configureStore();

        store.dispatch(setCurrencyData([]));
        let state = store.getState();

        expect(state.currency).toEqual([]);
    });
});
