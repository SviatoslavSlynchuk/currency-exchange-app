import React from 'react';
import PropTypes from 'prop-types';

const CurrencyPicker = props => {
    return (
        <select value={props.selectedValue} onChange={props.onChange}>
            {props.values.map((item, index) => (<option key={index} value={item}>{item}</option>))}
        </select>
    );
};

CurrencyPicker.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CurrencyPicker;
