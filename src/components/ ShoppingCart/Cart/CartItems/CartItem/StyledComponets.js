import styled from "styled-components";
export const CartItemDisplay = styled.div`
  margin-top: 20px;
  margin-left: 40px;
  color: #fffafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
export const ImageInCart = styled.img`
  width: 80px;
  height: 100px;
  margin-right: 10px;
`;
export const DeleteButton = styled.button`
  background-color: black;
  color: #303030;
  position: absolute;
  top: 5px;
  right: 5px;
  border: 0px;
  cursor: pointer;
  font-size: 20px;
`;
export const ProductTitle = styled.div`
  font-size: 20px;
`;
export const StrikeText = styled.div`
  text-decoration: line-through;
`;
export const PriceSize = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  color: #303030;
`;
export const Quantity = styled.div`
  color: #303030;
`;
export const Price = styled.div`
  color: yellow;
`;
