import React from 'react';
import { StyledHeader, HeaderTitle, RightItem } from './style'

import { useLocation } from 'react-router';
import BackButton from '../BackButton';

const MobileHeader = ({ style }) => {

    const location = useLocation();
    const locationPathname = location.pathname;

    const ButtonToStart = locationPathname === "/" || locationPathname === "/home"
        ? null
        : <BackButton />
    return (
        <StyledHeader style={style}>
            <HeaderTitle> League of spells</HeaderTitle>
            <RightItem>
                {ButtonToStart}
            </RightItem>
        </StyledHeader>
    )
}
export default MobileHeader

