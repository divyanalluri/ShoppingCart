import styled from "styled-components";
import { CartImage } from "../StyledComponets";

export const CartImageCart = styled.div`
  display: flex;
  width: 500px;
  height: 200px;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Cartimage = styled(CartImage)`
  cursor: none;
`;
export const NoOfItems = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: yellow;
  position: absolute;
  top: 110px;
  color: black;
  left: 250px;
`;
export const Div = styled.div``;
