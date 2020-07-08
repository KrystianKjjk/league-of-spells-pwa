import React from 'react';
import { StyledHeader, HeaderTitle, RightItem } from './style'

import { useLocation } from 'react-router';
import BackButton from '../BackButton';

const MobileHeader = props => {

    const location = useLocation();
    const locationPathname = location.pathname;

    const ButtonToStart = locationPathname === "/" || locationPathname === "/home"
        ? null
        : <BackButton />
    return (
        <StyledHeader >
            <HeaderTitle> League of spells</HeaderTitle>
            <RightItem>
                {ButtonToStart}
            </RightItem>
        </StyledHeader>
    )
}
export default MobileHeader

