import styled from 'styled-components'
import { border } from "../../border";

export const Container = styled.div`
  ${border('green')}
  display: flex;
  flex-direction: column;
  background-color: rgba(10,10,10, 0.1);

`;

export const AddedCharacter = styled.div`
  ${border('red')}
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 5px;
  padding: 5px;
  background-color: rgba(10,10,10, 0.3);
`;
export const PositionName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;