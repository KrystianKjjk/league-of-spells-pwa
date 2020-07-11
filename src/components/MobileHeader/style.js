import styled from "styled-components";
import Colors from '../../Colors'

// export const Container = styled.div`
//   position: absolute;
//   width: 100%;
// `
export const StyledHeader = styled.div`

    display: flex;
    position: relative;
    width: 100%;
    /* padding-top: 18px; */
    /* padding-bottom: 10px; */
    background: ${Colors.headerBackground};
    justify-content: center;
    flex-direction: 'row';
`
export const HeaderTitle = styled.span`
    font-size: 20px;
    align-self: center;
    color: white;
`
export const RightItem = styled.div`
    display: flex;
    /* border: 2px solid green; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    justify-content: flex-end;
`;

