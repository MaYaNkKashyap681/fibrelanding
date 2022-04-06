import React from "react";
import styled from "styled-components";

function HomeA() {
  return (
    <Container>
      <Wrap>
        <h3>Why Fibre?</h3>
        <h1>
          A good portfolio means good <br></br>employability.
        </h1>
      </Wrap>

      <Grids>
        <GridItem>
          <img src="../Assets/time.svg" />
          <HeadText>Build in minutes</HeadText>
          <ItemText>
            With a selection of premade templates, you can build out a portfolio
            in less than 10 minutes.
          </ItemText>
        </GridItem>

        <GridItem>
          <img src="../Assets/code.svg" />
          <HeadText>Build in minutes</HeadText>
          <ItemText>
            Customize your personal portfolio even more with the ability to add
            your own custom CSS styles.
          </ItemText>
        </GridItem>

        <GridItem>
          <img src="../Assets/allSizes.svg" />
          <HeadText>Build in minutes</HeadText>
          <ItemText>
            All Fibre templates are fully responsive to ensure the experience is
            seemless across all devices.
          </ItemText>
        </GridItem>
      </Grids>
    </Container>
  );
}

export default HomeA;

const Container = styled.div`
  width: 100vw;
  padding: 30px;
  margin-bottom: 20px;
  height: inherit;
`;

const Wrap = styled.div`
  margin-left: 100px;
  margin-right: 100px;

  h3 {
    color: #4d13d1;
    font-weigth: bold;
  }

  h1 {
    color: black;
  }
`;

const Grids = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 10px; 
  
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
   
`;

const GridItem = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

const ItemText = styled.p`
  font-weight: 300;
  color: gray;
  font-size: 16px;
  margin-top: 10px;
`;

const HeadText = styled.p`
  font-weight: bold;
  color: black;
`;
