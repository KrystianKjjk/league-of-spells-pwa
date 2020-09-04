import styled from 'styled-components'
import { border } from "../../utilities/border";

export const Container = styled.div`
  ${border('green')}
  display: flex;
  flex-direction: column;
  background-color: rgba(10,10,10, 0.1);

`;

export const AddedCharacter = styled.div`
  ${border('red')}
  display: flex;
  position: relative;
  justify-content: center;
  margin: 5px;
  padding: 5px;
  background-color: rgba(10,10,10, 0.3);
`;
export const PositionName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const Img = styled.img`
  ${border('blue')}

  display: 'flex';
  position:absolute;
  justify-content: 'flex-end';
  right: 5px;
  width: 16px;
  height: 16px;
  transition: transform 0.2s;
  &:hover{
    cursor: pointer;
    transform: scale(1.15)
  }
`;