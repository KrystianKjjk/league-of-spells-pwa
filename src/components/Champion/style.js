import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 2px;
    border: 1px solid black;
    width: 98%;
    justify-content: center;
    min-width: 125px;
    background-color: rgba(10,10, 10, 0.9);
    border-radius: 4px;
    color: white;
    transition: transform 0.3s;
    padding: 5px 0px 5px 0px;

    /* flex-direction: column; */
    &:hover {
        transform: scale(1.04);
        cursor: pointer;
        font-weight: bold;
    }
    @media( max-width: 800px) {
        width: 30%;
        /* flex-direction: row; */
        /* flex-wrap: wrap; */
    }
`;