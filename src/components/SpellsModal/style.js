import styled from 'styled-components';
import { border } from '../../border';

export const Container = styled.div`
`;


export const Spell = styled.button`
    display: flex;
    height: max-content;
    margin: 15px;
    padding: 10px;
    background-color: ${props => props.isAdded ? 'yellow' : 'white'};
    border: none;
    box-sizing: border-box;
    ${
    props => !props.disabled
        && (
            '&: hover{cursor: pointer; font-weight: bold;}'
        )
    }
`;
export const SpellContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    justify-content: flex-end;
    margin: 5px;
    ${border('red')}
`;
export const Button = styled.button`
    margin: 10px;
    padding: 10px 20px 10px 20px;
    border: none;
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.15);
        cursor: pointer;
    }
`;
export const CancelButton = styled(Button)`
    background-color: rgb(180, 50, 50);
`;
export const AcceptButton = styled(Button)`
    background-color: rgb(30, 130, 50);

`;
export const Label = styled.label`
    display: flex;
    margin: 5px;
    padding-bottom: 2%;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    color: white;
`;

