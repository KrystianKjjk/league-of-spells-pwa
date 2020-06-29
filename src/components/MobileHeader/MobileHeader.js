import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Colors from '../../Colors';

const MobileHeader = props => {
    return (
        <Value >
            <StyledHeader >
                <HeaderTitle className="header-title"> League of spells</HeaderTitle>

                <RightItem >
                    xd

                {props.children}
                </RightItem>
            </StyledHeader>
        </Value>
    )
}
export default MobileHeader

const Value = styled.div`
  position: absolute;
  width: 100%
`
const StyledHeader = styled.div`

    display: flex;
    position: relative;
    width: 100%;
    padding-top: 18px;
    padding-bottom: 10px;
    background: ${Colors.headerBackground};

    justify-content: center;
    flex-direction: 'row';
`
const HeaderTitle = styled.span`
    font-size: 20px;
    align-self: center;
    color: white;
`
const RightItem = styled.div`
    display: flex;
    position: absolute;
    right: 5%;
    align-content: center
`