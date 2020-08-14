import styled from "styled-components";
import Colors from './Colors'

export const Button = styled.div`
    padding: ${props => props.size || 5}px;
    border-radius:50%;
    display: flex;
    font-size: 19px;
    color: white;
    background-color: blue;
    background: ${Colors.buttonBackground};
    transition: transform 0.5s;
    z-index: 2;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        /* transform: rotate(180deg); */
    }
`;