import React from 'react';
import { Value, StyledHeader, HeaderTitle, RightItem } from './style'

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

