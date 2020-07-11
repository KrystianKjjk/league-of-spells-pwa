import styled from "styled-components";
import Colors from '../../Colors'

export const Container = styled.div`
    /* margin-top: 4%; */
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    /* border: 2px solid red; */


`
export const TableContainer = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction: column;
    border: 2px solid blue;
    width: 100%;
    height: 75vh;
    @media (max-height: 660px) {
        height: 70vh;
    }
`;
