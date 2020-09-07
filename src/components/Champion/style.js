import styled from "styled-components";
import Colors from "../../utilities/Colors";

export const Container = styled.div`
    display: flex;
    margin: 2px;
    border: 1px solid black;
    width: 96%;
    justify-content: center;
    min-width: 125px;
    background-color:
        ${props => props.isMarked
        ? Colors.championItem.isMarked
        : Colors.championItem.default};
    border-radius: 4px;
    color: white;
    transition: transform 0.3s;
    padding: 5px 0px 5px 0px;
    height: 20px;
    &:hover {
        transform: scale(1.04);
        cursor: pointer;
        font-weight: bold;
    }
`