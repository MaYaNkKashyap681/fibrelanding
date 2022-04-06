import React from "react";
import styled from "styled-components";

function HomeB() {
  return (
    <Container>
      <Wrapper>
        <Part1>
          <Wrap1>
            <h1>Diversify your portfolio.</h1>
            <p>
              Create an more impressive portfolio by creating case studies for
              your projects. Simply follow our step-by-step guide.
            </p>
            <Buttons>Start Free Trail</Buttons>
          </Wrap1>
        </Part1>
        <Part2>
          <img src="../Assets/Page Image.png" />
        </Part2>
      </Wrapper>
    </Container>
  );
}

export default HomeB;

const Container = styled.div`
  margin-bottom: 70px;
`;
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  background-color: #4d13d1;
  border-radius: 6px;
  height: 400px;
  display: flex;
  @media (max-width: 980px) {
     flex-direction: column;
     height: auto;
  }
`;

const Part1 = styled.div`
  flex: 2;
  padding: 60px;
  color: white;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 300;
    font-size: 20px;
  }

  h1 { 
    font-size: 26px;
    margin-bottom: 10px;
  }

  @media (max-width: 980px) {
   flex: 1;
   padding-top: 40px;
   padding-bottom: 0;
  }
`;

const Part2 = styled.div`
  flex: 3;
  padding: 40px 40px 0 40px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 980px) {
   padding: 0px 20px 0 20px;
  }
`;
const Buttons = styled.button`
  padding: 20px;
  background-color: white;
  color: #4d13d1;
  width: 160px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
`;

const Wrap1 = styled.div`
   display: flex;
   flex-direction: column;
  margin-bottom: 200px;
   justify-content: center;

   @media (max-width: 980px) {
    margin-top: 20px;
    padding: 0;
    margin-bottom: 40px;
  }
`