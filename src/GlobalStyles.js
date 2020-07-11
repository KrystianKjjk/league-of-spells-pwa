import styled from "styled-components";
import Colors from './Colors'

export const Button = styled.div`
    border-radius:50%;
    display: flex;
    font-size: 19px;
    color: white;
    background-color: blue;
    background: ${Colors.buttonBackground};
    transition: transform 4s;
    z-index: 2;
    &:hover {
        cursor: pointer;
        /* transform: rotate(180deg); */
    }
`;