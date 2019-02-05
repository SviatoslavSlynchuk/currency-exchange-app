import React from 'react';
import PropTypes from 'prop-types';

const CurrencyValueInput = props => (
    <input type='number' value={props.value} onChange={props.onChange}/>
);

CurrencyValueInput.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CurrencyValueInput;
