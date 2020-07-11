import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 2px;
    border: 2px solid green;
    width: 95%;
    justify-content: center;
        min-width: 125px;

    /* flex-direction: column; */
    &:hover {
        transform: scale(1.01);
        font-weight: bold;
    }
    @media( max-width: 800px) {
        width: 30%;
        /* flex-direction: row; */
        /* flex-wrap: wrap; */
    }
`;