import styled from "styled-components";
import Colors from '../../Colors'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const SearchedChampions = styled.div`
    border: 2px solid red;
    padding: 10px;
    margin: 5px;
    background-color: rgba(0,0,90,0.9);

`;
export const Input = styled.input`
   border-radius: 10%;
   font-size: 18px;
   background-color: rgba(10,10,10,0.8);
   color: white;
   box-shadow: 0px 2px 5px 0px black;
   padding: 5px;
`;
export const AddedChampions = styled.div`

`;

export const AllChampions = styled.div`

`;
