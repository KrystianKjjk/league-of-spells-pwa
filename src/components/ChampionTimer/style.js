import styled from 'styled-components';
import { border } from '../../utilities/border';

export const Container = styled.div`
    ${border('black')}
    box-sizing: border-box;
    display: flex;
    width: 97%;
    height: max-content;
    margin:3px;
    flex-direction: column;
    box-sizing: border-box;
`;

export const Header = styled.span`
    font-weight: bold;
    font-size: 24px;
`;

