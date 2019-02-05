import React from 'react';
import PropTypes from 'prop-types';
import CurrencyItem from './CurrencyItem';

const CurrenciesList = props => {

    return (
        <ul>
            {Object.keys(props.rates).map((currencyName, index) => (
                <CurrencyItem
                    key={index}
                    currencyName={currencyName}
                    currencyValue={props.rates[currencyName]}
                />
            ))}
        </ul>
    );
};

CurrenciesList.propTypes = {
    rates: PropTypes.object.isRequired,
};

export default CurrenciesList;
