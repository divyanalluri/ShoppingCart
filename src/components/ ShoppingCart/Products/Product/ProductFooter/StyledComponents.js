import styled, { css } from "styled-components";
export const AddToCartButton = styled.button`
  width: 200px;
  background-color: black
  height: 50px;
  color: white;
  border: 0px;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  ${props =>
    props.hover == true &&
    css`
      background-color: yellow;
      color: black;
    `}
`;
