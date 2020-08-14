import styled from 'styled-components';
import { border } from '../../border';

export const Container = styled.div`
${border('gray')}
display: flex;
position: relative;
width: 100%;
margin: 2px;
border: 2px solid black;
border-radius: 25px;
justify-content: space-between;

span{
    padding: 5px;
    color: ${props => props.fontColor};
    margin: 0px 1% 0px 1%;
}
`;

export const Stripe = styled.div`
border: 1px solid black;
border-radius: 25px;
`;
export const TimeBar = styled.div.attrs(props => ({
    style: {
        width: props.width,
    }

}))`
${border('yellow')}
position: absolute;
background-color: ${props => props.backgroundColor};
height: 100%;
border-radius: 25px;
z-index:-1;
/* padding: 10px; */

`;