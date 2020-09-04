import React from 'react';
import BackButton from '../BackButton';
import Links from '../../utilities/Links';

import { StyledHeader, HeaderTitle, RightItem } from './style'
import { useLocation } from 'react-router';


const MobileHeader = ({ style }) => {

    const location = useLocation();
    const locationPathname = location.pathname;

    const ButtonToStart = locationPathname === Links.Default || locationPathname === Links.Home
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

