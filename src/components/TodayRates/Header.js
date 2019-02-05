import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 5px;
`;

const Header = props => {
    return (
        <StyledHeader>
            <span>Today's rates</span>
            <span>{`1 ${props.base} =`}</span>
        </StyledHeader>
    );
};

Header.propTypes = {
    base: PropTypes.string.isRequired,
};

export default Header;
