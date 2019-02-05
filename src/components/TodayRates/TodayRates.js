import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import CurrenciesList from './CurrenciesList';

const StyledContainer = styled.div`
    width: 200px;
    border: 1px solid #ccc;
`;

const TodayRates = props => {
    const { item } = props;
    return (
        <StyledContainer>
            <Header base={item.base}/>
            <CurrenciesList rates={item.rates}/>
        </StyledContainer>
    );
};

TodayRates.propTypes = {
    item: PropTypes.object.isRequired,
};

export default TodayRates;
