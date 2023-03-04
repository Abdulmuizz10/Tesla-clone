import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        title= "Model S"
        description = "Order Online For Touchless Delivery"
        backgroundImg = "model-s.jpg"
        leftBtnText= "CUSTOM ORDER"
        rightBtnText= "EXISTING INVENTORY"
        />
        <Section 
        title= "Model Y"
        description = "Order Online For Touchless Delivery"
        backgroundImg = "model-y.jpg"
        leftBtnText= "CUSTOM ORDER"
        rightBtnText= "EXISTING INVENTORY"
        />
        <Section 
        title= "Model 3"
        description = "Order Online For Touchless Delivery"
        backgroundImg = "model-3.jpg"
        leftBtnText= "CUSTOM ORDER"
        rightBtnText= "EXISTING INVENTORY"
        />
        <Section 
        title= "Model X"
        description = "Order Online For Touchless Delivery"
        backgroundImg = "model-x.jpg"
        leftBtnText= "CUSTOM ORDER"
        rightBtnText= "EXISTING INVENTORY"
        />
        <Section 
        title= "Lowest Cost Solar Panels In America"
        description = "Money-back guarantee"
        backgroundImg = "solar-panel.jpg"
        leftBtnText= "Order now"
        rightBtnText= "Learn more"
        />
        <Section 
        title= "Solar For New Roofs"
        description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg = "solar-roof.jpg"
        leftBtnText= "Order now"
        rightBtnText= "Learn more"
        />
        <Section 
        title= "Accessories"
        backgroundImg = "accessories.jpg"
        leftBtnText= "CUSTOM ORDER"
        />
    </Container>
  )
}

export default Home


const Container = styled.div`
    height: 100vh;
    overflow-x: hidden;
    // z-index: 1;
`
