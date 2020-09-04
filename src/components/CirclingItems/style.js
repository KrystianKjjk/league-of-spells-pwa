import styled, { keyframes, css } from "styled-components";

const rotate = (deg) => keyframes`
    from {
        transform:  rotate(${deg}deg);
    }
    to {
        transform: rotate(${deg + 360}deg);
    }
`
export const Container = styled.div`
    display: flex;
    position: absolute;
    background-color: transparent;
    width: ${ p => p.diameter};
    height: ${p => p.diameter};
    z-index: 0;
    justify-content: center;
    align-items: center;
`;
/* animation: ${ props.isRotating ? rotate(props.startRotate) : null} ${props.tradingTime} s linear infinite; */
const circleRotation = props =>
    css`
        animation: ${rotate(props.startRotate)} ${props.tradingTime}s linear infinite;
    `;

export const Circle = styled.div.attrs(props => ({
    style: {
    }
}))`

    display: flex;
    position: absolute;
    background-color: transparent;
    width: ${ p => p.diameter};
    height: ${p => p.diameter};
    z-index: 0;
    ${circleRotation};

`;
export const Triangle = styled.div`
    position: absolute;
    display: flex;
    margin: 10px;
	width: 0;
	height: 0;
	border-left: 5vh solid transparent;
	border-right: 5vh solid transparent;
    border-bottom: 10vh solid #111;
    z-index: 2;
    top: ${p => p.distanceFromCenter};
    left: ${p => p.distanceFromCenter};
    transform: rotate(135deg);
`;
