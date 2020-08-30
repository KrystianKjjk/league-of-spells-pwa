import styled from 'styled-components';
import { border } from '../../border';

export const Container = styled.div`
    ${border('black')}
    box-sizing: border-box;
    display: flex;
    width: 97%;
    height: max-content;
    margin:3px;
    flex-direction: column;
    /* margin: 5px; */
    box-sizing: border-box;
`;

export const Header = styled.span`
    font-weight: bold;
    font-size: 24px;
`;


export const Modal = styled.div`
    position: absolute;
    flex-direction: column;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-self: center;
    width: max-content;
    width: 50%;
    height: max-content;
    overflow-x: auto;
    background-color: rgba(10,10,10,0.9);
    z-index: 2;
    top: 40%;
    padding: 8%;
    @media (max-width: 700px) {
        width: 85%;
        padding: 3%;

    }
`;
