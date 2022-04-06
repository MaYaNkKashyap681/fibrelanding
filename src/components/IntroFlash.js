import React from "react";
import styled from "styled-components";

function IntroFlash() {
  return (
    <Container>
      <Part1>
      <RatingStar>
      <img src='../Assets/star.svg'/>
      <img src='../Assets/star.svg'/>
      <img src='../Assets/star.svg'/>
      <img src='../Assets/star.svg'/>
      <img src='../Assets/star.svg'/>

      <p>Rated 4.8/5 (243 reviews)</p>
      </RatingStar>
        <h1>Create your portfoilio in minutes.</h1>
        <p>
          With Fibre, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <Wrap>
        <Buttons>Start Free Trail</Buttons>
        <a href="#">View Examples</a>
        </Wrap>
        <ParaHolder>
          <p className="fp">
            <img src="../Assets/checkmark.svg" />
            No Credit Card Required
          </p>
          <p className="fp">
            <img src="../Assets/checkmark.svg" />
            10 Free Templates
          </p>
        </ParaHolder>
      </Part1>
      <Part2>
        <img src="../Assets/hero-Illustration.png" />
      </Part2>
    </Container>
  );
}

export default IntroFlash;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fbf8f3;

  @media (max-width: 980px) {
    flex-direction: column-reverse;
  }
`;

const Part1 = styled.div`
  flex: 2;
  text-align: left;
  padding: 40px;
  margin-left: 100px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    color: black;
    font-size: bold;
  }

  p {
    font-weight: 300;
    color: gray;
  }

  a {
    color: #4d13d1;
    font-weight: 620;
  }

  @media (max-width: 980px) {
   flex: 1;
  }
`;

const Part2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  img {
    width: 400px;
    height: 100%;
    object-fit: cover;
    position: center;
    margin-right: 100px;

    @media (max-width: 980px) {
   margin-right: 0px;
   margin-left: 40px;
  }
  }

  @media (max-width: 980px) {
    justify-content: center;
    align-items: center;
  }
`;

const Buttons = styled.button`
  padding: 20px;
  background-color: #4d13d1;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 6px;

  @media (max-width: 980px) {
    flex: 1;
  }
`;

const ParaHolder = styled.div`
 display: flex;
 flex-direction: row;
 margin-top: 10px;
 p {
     display: flex;
     flex-direction: row;
     margin-right: 10px;
     font-weight: 200;
     color: gray;

     @media (max-width: 980px) {
    margin-top: 10px;
  }
 }

 @media (max-width: 980px) {
    flex-direction: column;
  }
`

const RatingStar = styled.div`
   display: flex;
   flex-direction: row;
   
   img {
       margin-right: 6px;
   }

   p {
       margin-left: 4px;
   }
`

const Wrap = styled.div`
  margin-top: 16px;

  a {
      margin-left: 40px;
  }
`