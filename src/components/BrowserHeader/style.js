import styled from 'styled-components'
import Colors from '../../utilities/Colors'

export const StyledHeader = styled.div`
    display: flex;
    width: 100%;
    padding-top: 18px;
    padding-bottom: 10px;
    background: ${Colors.headerBackground};
    justify-content: center;
    flex-direction: 'row';
`

export const HeaderTitle = styled.span`
    font-size: 20px;
    align-self: center;
    color: white;
`