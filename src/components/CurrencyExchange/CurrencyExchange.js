import React from 'react';
import PropTypes from 'prop-types';
import CurrencyPicker from './CurrencyPicker';
import CurrencyValueInput from './CurrencyValueInput';

const CurrencyExchange = props => {
    const { firstBlock, secondBlock } = props;
    return (
        <div>
            <div>
                <CurrencyValueInput key={0} value={firstBlock.value} onChange={() => {}}/>
                <CurrencyPicker
                    key={0}
                    selectedValue={firstBlock.currency}
                    values={firstBlock.values}
                    onChange={() => {}}
                />
            </div>
            <div>
                <CurrencyValueInput key={1} value={secondBlock.value} onChange={() => {}}/>
                <CurrencyPicker
                    key={1}
                    selectedValue={secondBlock.currency}
                    values={secondBlock.values}
                    onChange={() => {}}
                />
            </div>
        </div>
    );
};

CurrencyExchange.propTypes = {
    firstBlock: PropTypes.object.isRequired,
    secondBlock: PropTypes.object.isRequired,
};

export default CurrencyExchange;
