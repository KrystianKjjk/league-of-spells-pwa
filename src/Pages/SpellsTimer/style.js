import styled, { keyframes, css } from 'styled-components';
import { border } from '../../utilities/border';

const leftPosition = (NoPixels) => css`-${NoPixels}px`;
const windowIncome = (left) => keyframes`
  0% {
    left: ${leftPosition(left)};
  }

  100% {
    left: 0px;
  }
`;
const windowOutcome = (left) => keyframes`
    0% {
        left: 0px;
    }

    100% {
        left: ${leftPosition(left)};
    }
`;
const incomeAnimation = (animationName) => css`
    animation: ${props => animationName(props.hiddenWidth)} 0.5s linear;
`
export const Container = styled.div`
    ${border('blue')}
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-content: center;
    align-items: center;
`;
/* left: -${props => props.hiddenWidth + 2}px; */
/* left: 0px; */
export const SpeechWindow = styled.div`
    display: flex;
    position: absolute;
    top: 5%;
    ${props => incomeAnimation(props.isHidden ? windowOutcome : windowIncome)};
    left: ${props => props.isHidden ? leftPosition(props.hiddenWidth) : '0px'};
    visibility: visible;
    ${border('red')}
`;
export const ShowSpeechWindowButton = styled.button`
    font-weight: bold;
    font-size: 18px;
    display: flex;
    height: max-content;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    border: 2px solid black;
    margin: 2px;
    &:hover{
        cursor: pointer;
    }
`;

