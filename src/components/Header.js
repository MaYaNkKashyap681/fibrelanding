import React,{useState} from "react";
import styled from "styled-components";


function Header() {

  const [ShowBurger,ChangeBurger] = React.useState(true);
  return (
    <Nav>
      <Logos>Fibre</Logos>

      <NavMenu>
        <a href="#">Community</a>
        <a href="#">Pricing</a>
        <a href="#">Features</a>
      </NavMenu>
      <ButtonsWrap>
        <Buttons backc="white" textc="black">
          Sign In
        </Buttons>
        <Buttons backc="#4d13d1" textc="white">
          Sign Up
        </Buttons>

        <HamburgerIcon onClick={() => ChangeBurger(true)}>&#9776;</HamburgerIcon>
      </ButtonsWrap>

      <BurgerNav showit = {ShowBurger}>
      <CloseIcon onClick = {() => ChangeBurger(false)}>&times;</CloseIcon>
      <InWrap>
      <ButtonsWrap>
        <Buttons22 backc="white" textc="black">
          Sign In
        </Buttons22>
        <Buttons22 backc="#4d13d1" textc="white">
          Sign Up
        </Buttons22>
      </ButtonsWrap>
          <li><a href="#">Community</a></li>       
          <li><a href="#">Pricing</a></li>       
          <li><a href="#">Features</a></li>
          </InWrap>         
      </BurgerNav>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  background-color: #fbf8f3;
  height: 16vh;
  width: 100vw;
`;

const Logos = styled.h1`
  font-weight: 500;
  font-size: 20px;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: gray;
    font-weight: 200;
    margin: 0 8px;
  }

  @media (max-width: 980px) {
     display: none;
  }
`;

//&#9776;

const ButtonsWrap = styled.div`
  
`;

const Buttons = styled.button`
  background-color: ${(props) => props.backc};
  color: ${(props) => props.textc};
  border: none;
  padding: 12px;
  font-weight: bold;
  border-radius: 6px;
  margin: 0 6px;
  cursor: pointer;
  
  @media (max-width: 980px) {
     display: none;
  }
`;

const Buttons22 = styled.button`
  background-color: ${(props) => props.backc};
  color: ${(props) => props.textc};
  border: none;
  padding: 12px;
  font-weight: bold;
  border-radius: 6px;
  border-radius: 6px;
  margin: 0 6px;
  cursor: pointer;
  width: 100%;
`;

const BurgerNav = styled.div`
    position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     background: white;
     width: 300px;
     z-index: 999;
     display: flex;
     flex-direction: column;
     list-style: none;
     padding: 20px;
     transform: ${props => props.showit ? 'translateX(0)' : 'translateX(100%)'};     
     transition: ease-in-out all 0.4s;
     li{
       font-size: 50px;
       padding: 15px 15px;
     }

     a{
       font-weight: 300;
       text-decoration: none;
     }
  
     @media (min-width: 980px) {
     display: none;
  }
`;

const InWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
`

const CloseIcon = styled.p`

font-size: 40px;
padding: 10px;
cursor: pointer;
transition: ease-in all 2s;
`

const HamburgerIcon = styled.p`
    font-size: 30px;
    display: none;
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;

    @media (max-width: 980px) {
     display: flex;
  }
`