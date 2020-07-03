import styled, { keyframes } from "styled-components";
import Colors from '../../Colors'

export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Circle = styled.div`
    display: flex;
    position: absolute;
    background-color: transparent;
    width: ${ p => p.diameter};
    height: ${p => p.diameter};
    border-radius: 50%;
    z-index: 0;
    animation: ${p => p.rotation ? rotate : null} 60s linear infinite;
`;

export const Container = styled.div`
    background: ${Colors.mainScreenBackground};
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
`;
export const Triangle = styled.div`
    /* width: 50px;
    height: 50px; */
    position: absolute;
    display: flex;
    /* background-color: blue; */
    margin: 10px;
	width: 0;
	height: 0;
	border-left: 5vw solid transparent;
	border-right: 5vw solid transparent;
    border-bottom: 10vw solid #111;
    z-index: 2;
`;
