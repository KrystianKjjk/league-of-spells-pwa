import styled from 'styled-components';
import { border } from '../../border';

export const Container = styled.div`
    ${border('red', true)}
    display: flex;
    width: 100%;
    height: max-content;
    padding: 2px;
    flex-direction: column;
    /* margin: 2px; */
    box-sizing: border-box;
`;

export const Header = styled.span`
    font-weight: bold;
    font-size: 24px;
`;