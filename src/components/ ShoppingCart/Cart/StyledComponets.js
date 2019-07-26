import styled, { css } from "styled-components";
export const CartInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
export const Count = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: yellow;
  position: absolute;
  top: 40px;
  right: 6px;
`;
export const Div = styled.div``;
export const DisplayCart = styled.div`
  width: 0px;
  height: 850px;
  background-color: black;
  z-index: 5;
  overflow: hidden;
  overflow: scroll;
  color: white;
  transition: 1s
    ${props =>
      props.display &&
      css`
        width: 520px;
      `};
`;

export const CartItemInfo = styled(DisplayCart)`
  width: 520px;
`;

export const CartImage = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: relative;
  top: 10px;
  right: 10px;
`;
export const CartImageAfter = styled.button`
  background-color: black;
  border: 0px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 20px;
`;
export const DefaultMessage = styled.div`
  margin-top: 50px;
  margin-left: 160px;
`;
