import styled from 'styled-components';
import { border } from '../../border';

export const Container = styled.div`
    ${border('blue')}
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around
`;

