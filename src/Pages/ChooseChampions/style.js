import styled from "styled-components";
// import Colors from '../../Colors'
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
export const NotCompletedError = styled.div`
    /* margin-top: 4%; */
    position: fixed;
    bottom: 0%;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(220,0,0,0.7);
    padding: 8px;
    /* border: 2px solid red; */
    ${border('rgb(255,0, 120)')}


`
