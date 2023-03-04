import React from 'react'
import logo from "../img/logo.svg"
import styled from "styled-components"
import { useState } from 'react'

function Navbar() {

   const [BurgerStatus, SetBurgerStatus] = useState(false) 
  return (
    <Container>

        <a>
            <img src={logo} alt="" />
        </a>

        <Menu>
            <a href="#">MODEL S</a>
            <a href="#">MODEL 3</a>
            <a href="#">MODEL X</a>
            <a href="#">MODEL Y</a>
        </Menu>

        <RightMenu>
            <a href="#">SHOP</a>
            <a href="#">TESLA ACCOUNT</a>
            <i className='bx bx-menu-alt-right' onClick={() => SetBurgerStatus(true)}></i>
        </RightMenu>

        <BurgerNav show={BurgerStatus}>
            <div className="close">
                <i className='bx bx-x' onClick={() => SetBurgerStatus(false)}></i>
            </div>
            <li><a href="#">MODEL S</a></li>
            <li><a href="#">MODEL 3</a></li>
            <li><a href="#">MODEL X</a></li>
            <li><a href="#">MODEL Y</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">cyber Truck</a></li>
            <li><a href="#">Roadaster</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Existing Inventory</a></li>
        </BurgerNav>

    </Container>
  )
}

export default Navbar

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 25px;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    z-index: 1;
`



const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        margin-right: 10px;
    }

    i {
        cursor: pointer;
        font-size: 30px;
    }

`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    text-aling: start;
    justify-content: flex-start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: 0.2s;

    li {
        padding: 13px 0;
        border-bottom: 2px solid rgba(0, 0, 0, .2);


        a {
            font-weight: 600;

        }
    }
    z-index: 10000000;
`