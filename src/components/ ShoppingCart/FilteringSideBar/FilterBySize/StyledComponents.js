import styled from "styled-components";
export const Button = styled.button`
width: 50px
height: 50px
border-radius: 25px;
border: 0px;
margin: 4px 4px;
:hover{
    border: 1px solid black;
}`;

export const SelectedButton = styled(Button)`
  background-color: black;
  color: white;
`;
export const FilterButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 250px;
`;
