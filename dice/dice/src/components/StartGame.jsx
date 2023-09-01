import React from "react";
import styled from "styled-components";

const StartGame = (props) => {
  return (
    <Container>
      <div><img src="./images/dices 1.png" /></div>
      <div className="content"><h1>Dice Game</h1>
      <Button onClick={props.toggle}>Play now</Button></div>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`;

const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color : white;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.5s background ease-in;
  cursor: pointer;
  &:hover{
 background-color: white;
 transition: 0.5s background ease-in;
 border: 1px solid black;
 color:black;
  }
`;
export default StartGame;
