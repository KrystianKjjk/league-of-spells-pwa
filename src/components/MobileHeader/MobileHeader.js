import React from 'react';
import { StyledHeader, HeaderTitle, RightItem } from './style'

const MobileHeader = props => {
    return (
        <StyledHeader >
            <HeaderTitle> League of spells</HeaderTitle>

            <RightItem >
                xd
                    {props.children}
            </RightItem>
        </StyledHeader>
    )
}
export default MobileHeader

