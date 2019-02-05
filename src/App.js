/* eslint-disable no-unused-vars, no-undef, class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Loading from './components/Loading/Loading';
import TodayRates from './components/TodayRates/TodayRates';
import CurrencyExchange from './components/CurrencyExchange/CurrencyExchange';
import * as constants from './constants';

const StyledContainer = styled.div`
    width: 600px;
    margin: 0 auto;
`;

class App extends Component {
    render() {
        const {
            isFetching,
        } = this.props;
        return (
            <StyledContainer className="main-application-container">
                {
                    isFetching
                        ? <Loading/>
                        : (<div>
                                <CurrencyExchange
                                    firstBlock={this.props.firstExchangeBlockData}
                                    secondBlock={this.props.secondExchangeBlockData}
                                />
                                <TodayRates item={this.props.currency}/>
                            </div>
                        )
                }
            </StyledContainer>
        );
    }
}

App.propTypes = {
    currency: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state = {}) {
    const { currency = {}, misc: { isFetching }, exchange } = state;
    const firstExchangeBlockData = {
        currency: exchange.firstCurrency,
        value: exchange.firstValue,
        values: constants.AVAILABLE_CURRENCIES.filter(item => item !== exchange.firstCurrency)
    };
    const secondExchangeBlockData ={
        currency: exchange.secondCurrency,
        value: exchange.secondValue,
        values: constants.AVAILABLE_CURRENCIES.filter(item => item !== exchange.secondCurrency)
    };

    return {
        currency,
        isFetching,
        firstExchangeBlockData,
        secondExchangeBlockData,
    };
}

export default hot(module)(connect(mapStateToProps)(App));
