import styled, { css } from "styled-components";
import Colors from '../../Colors'
import { border } from "../../border";

export const Container = styled.div`
    /* margin-top: 4%; */
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    /* border: 2px solid red; */
    ${border('rgb(255,0,255)')}


`
export const TableContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    /* justify-content: center; */
    /* align-content: center; */
    ${border('blue')}
    width: 100%;
    height: 75vh;
    @media (max-height: 660px) {
        height: 70vh;
    }
`;

export const narrowList = {
    width: '48%',
    height: '100%'
}
export const wideList = {
    width: '100%',
    // height: '50%'
}