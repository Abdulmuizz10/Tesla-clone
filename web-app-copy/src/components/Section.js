import React from 'react'
import styled from "styled-components"
import downarrow from "../img/down-arrow.svg"
// import Fade from "react-reveal/fade"

function Section( { title, description, backgroundImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage={backgroundImg} >
        <ItemText>
            <h1> {title} </h1>
            <p> { description } </p>
        </ItemText>

        <Buttons>
                <ButtonGroup>
                    <LeftButton> { leftBtnText } </LeftButton>
                    { rightBtnText && <RightButton> { rightBtnText } </RightButton>}
                </ButtonGroup>

                <div className="image">
                  <img src={downarrow} alt="" />
                </div>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background : ${props => `url("/img/${props.bgImage}")` };
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`

const Buttons = styled.div`
  z-index: 0;
`

const ButtonGroup = styled.div`
  display: flex; 
  margin-bottom: 17px;

  @media (max-width: 786px) {
    flex-direction: column;
    z-index: 1;
  }
`

const LeftButton = styled.div`
  background: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  z-index: 1;
`

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
  z-index: 1;
`




