import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helpers from '../../helpers';

const StyledListItem = styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
    margin: 0 10px;
`;

const CurrencyItem = props => {
    return (
        <StyledListItem>
            <span>{props.currencyName}</span>
            <span>{Helpers.formatCurrencyValue(props.currencyValue)}</span>
        </StyledListItem>
    );
};

CurrencyItem.propTypes = {
    currencyName: PropTypes.string.isRequired,
    currencyValue: PropTypes.number.isRequired,
};

export default CurrencyItem;
