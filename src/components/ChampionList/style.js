import styled from 'styled-components'


export const List = styled.div`
    width: 100%;
    height: ${props => props.height}px;
    display: flex;
    flex-direction: row;
    overflow-y: auto;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    /* border: 2px solid red; */
`;
