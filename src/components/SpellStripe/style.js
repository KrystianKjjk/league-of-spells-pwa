import styled from 'styled-components';
import { border } from '../../border';

export const Container = styled.div`
${border('gray')}
display: flex;
position: relative;
width: 100%;
margin: 2px;
`;

export const Stripe = styled.div`
${border('green')}
`;
export const TimeBar = styled.div`
${border('yellow')}
position: absolute;
width: ${props => props.width};
background-color: ${props => props.backgroundColor};
height: 100%;

`;