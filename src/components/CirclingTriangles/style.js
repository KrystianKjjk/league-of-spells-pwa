import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform:  rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
export const Container = styled.div`

    display: flex;
    position: absolute;
    background-color: transparent;
    width: ${ p => p.diameter};
    height: ${p => p.diameter};
    z-index: 0;
    animation: ${ p => p.isRotating ? rotate : null} ${p => p.tradingTime}s linear infinite;

`;
export const Triangle = styled.div`
    position: absolute;
    display: flex;
    margin: 10px;
	width: 0;
	height: 0;
	border-left: 5vw solid transparent;
	border-right: 5vw solid transparent;
    border-bottom: 10vw solid #111;
    z-index: 2;
`;