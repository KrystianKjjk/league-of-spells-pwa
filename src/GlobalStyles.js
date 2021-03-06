import styled from "styled-components";
import Colors from './utilities/Colors'

export const Button = styled.div`
    padding: ${props => props.size || 5}px;
    border-radius:50%;
    display: flex;
    font-size: 19px;
    color: white;
    background-color: blue;
    background: ${Colors.mainButtonBackground};
    align-items: center;
    transition: transform 0.5s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        /* transform: rotate(180deg); */
    }
`;