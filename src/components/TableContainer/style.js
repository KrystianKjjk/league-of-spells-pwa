import styled from 'styled-components'
import { border } from '../../utilities/border';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 75vh;
    ${border('blue')}
    @media (max-height: 660px) {
        height: 70vh;
    }
`;


export const narrowList = {
    width: '48%',
}
export const wideList = {
    width: '100%',

}