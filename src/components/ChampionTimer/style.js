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
    position: relative;
`;

export const Header = styled.span`
    font-weight: bold;
    font-size: 24px;
`;


export const Modal = styled.div`
    position: absolute;
    display: flex;
    /* flex-direction: column; */
    width: max-content;
    right: 0px;
    height: 100%;
    overflow-x: auto;
    background-color: rgba(10,10,10,0.9);
    @media (max-width: 700px) {
        width: 100%;
    }
`;
export const Spell = styled.button`
    display: flex;
    height: max-content;
    margin: 5px;
    padding: 10px;
    background-color: white;
    border: none;
    &:hover{
        cursor:pointer;
        font-weight: bold;

    }
`;
export const SpellContainer = styled.div`
display: flex;
flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
right: 0;
margin: 5px;
${border('red')}
`;