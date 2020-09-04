import styled from 'styled-components'
import { border } from '../../utilities/border';


export const List = styled.div.attrs(props => ({
    style: {
        height: props.height
    }
}))`
    width: ${props => props.width};
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    flex-wrap: wrap;
    align-content:flex-start;
    justify-content: center;
    ${border('red')}
    overflow-x: hidden;
`;
