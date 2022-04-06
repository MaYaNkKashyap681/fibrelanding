import React from "react";
import styled from "styled-components";

function IntroFlash() {
  return (
    <Container>
    <Wrap22>
      <Part1>
        <RatingStar>
          <img src="../Assets/star.svg" />
          <img src="../Assets/star.svg" />
          <img src="../Assets/star.svg" />
          <img src="../Assets/star.svg" />
          <img src="../Assets/star.svg" />

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
      </Wrap22>
    </Container>
  );
}

export default IntroFlash;

const Container = styled.div`
  width: 100vw;
  background-color: #fbf8f3;
  padding: 30px;
  margin-bottom: 20px;
  height: inherit;
`;

const Part1 = styled.div`
  flex: 2;
  text-align: left;
  padding: 40px;
  ${
    "" /* margin-left: 100px;
  margin-right: 100px; */
  }
  margin: auto;
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

  @media (max-width: 425px) {
    margin-left: auto;
    padding: 10px;
    h1 {
      font-size: 20px;
      color: black;
      font-size: bold;
    }
  }
`;

const Part2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  img {
    width: 500px;
    height: 100%;
    object-fit: cover;
    position: center;
    margin: auto;

    @media (max-width: 980px) {
      margin: auto;
      widht: 300px;
    }

    @media (max-width: 425px) {
      margin: auto;
      width: 300px;
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
`;

const RatingStar = styled.div`
  display: flex;
  flex-direction: row;

  img {
    margin-right: 6px;
  }

  p {
    margin-left: 4px;
  }
`;

const Wrap = styled.div`
  margin-top: 16px;

  a {
    margin-left: 40px;
  }
`;

const Wrap22 = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 980px) {
    flex-direction: column-reverse;
  }
`