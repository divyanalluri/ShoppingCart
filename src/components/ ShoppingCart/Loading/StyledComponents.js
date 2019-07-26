import styled, { keyframes } from "styled-components";
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const LoadingSymbol = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderClass = styled.div`
  width: 1000px;
  height: 1000px;
`;
