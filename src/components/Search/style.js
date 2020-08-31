import styled from "styled-components";


export const SearchedChampions = styled.div`
    display: flex;
    border-radius: 2px;
    padding: 10px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,90,0.9);
    width: 50%;

    @media (max-width: 500px) {
    width: 85%;
    }
    span {
        color: white;
        margin-right:15px;
    }
`;

export const Input = styled.input`
   border-radius: 2%;
   font-size: 18px;
   background-color: rgba(10,10,10,0.8);
   color: white;
   box-shadow: 0px 2px 5px 0px black;
   padding: 5px;
`;