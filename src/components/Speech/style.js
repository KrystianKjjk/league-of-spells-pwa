import styled from 'styled-components'

export const SpeechWindow = styled.div`
    background-color: white;
    border: 2px solid black;
    margin: 4px 1px 0px 0px;
    padding: 8px;
    z-index: 2;
`;

export const ListeningInfo = styled.span`
display: flex;
justify-content: center;
    align-items: center;
    font-size: 18px;
    font-style: italic;
`;
export const Button = styled.button`
    border: 1px solid black;
    margin: 2px;
    &:hover{
        cursor: pointer;
    }
`;
export const Span = styled.span`
    font-weight: bold;
    padding: 0px 7px 0px 7px;
`;