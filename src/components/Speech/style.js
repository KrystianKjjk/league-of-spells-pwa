import styled from 'styled-components'
import Colors from '../../utilities/Colors';

export const SpeechWindow = styled.div`
    background-color: ${Colors.speech.background};
    border: 2px solid black;
    margin: 4px 1px 0px 0px;
    padding: 8px;
`;

export const ListeningInfo = styled.span`
display: flex;
justify-content: center;
    align-items: center;
    font-size: 18px;
    font-style: italic;
`;
export const Button = styled.button.attrs(props => (props.chosen
    ? {
        backgroundColor: Colors.selectedOption,
        color: 'white'
    }
    : {
        backgroundColor: Colors.unselectedOption,
        color: 'black'
    }))`

        &:hover{
        cursor: pointer;
    }
    `;
export const Span = styled.span`
    font-weight: bold;
    padding: 0px 7px 0px 7px;
`;