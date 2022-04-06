import React from "react";
import styled from "styled-components";

function HomeC() {
  return (
    <Container>
      <Wrapper>
        <Grid>
          <GridItem>
           <Part1>
             <Part1a>
               <img src = '../Assets/User Avatar.svg'/>
             </Part1a>
             <Part1b>
                  <h5>Sarah Andrews</h5>
                  <p>$100k in revenue</p>
             </Part1b>
           </Part1>
           <Part2>
             Setting up my portfolio with Fibre took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.
           </Part2>
           <Part3>
        <Buttons>View Profile</Buttons>
           </Part3>
          </GridItem>
          <GridItem>
          <Part1>
             <Part1a>
               <img src = '../Assets/User Avatar 2.svg'/>
             </Part1a>
             <Part1b>
                  <h5>Mathew Higgins</h5>
                  <p>$20k in revenue</p>
             </Part1b>
           </Part1>
           <Part2>
           I have been getting a LOT of leads ever since I used Fibre's premade templates, now I just need to work on my case studies and I'll be ready to go!
           </Part2>
           <Part3>
        <Buttons>View Profile</Buttons>
           </Part3>
          </GridItem>
          <GridItem>
          <Part1>
             <Part1a>
               <img src = '../Assets/User Avatar 32.svg'/>
             </Part1a>
             <Part1b>
                  <h5>Janice Dave</h5>
                  <p>$30k in revenue</p>
             </Part1b>
           </Part1>
           <Part2>
           I only just started freelancing this yet have already made more than I ever in my ful-time job. The templates are so amazing and helped me a lot be get job. 
           </Part2>
           <Part3>
        <Buttons>View Profile</Buttons>
           </Part3>
          </GridItem>
        </Grid>
      </Wrapper>
    </Container>
  );
}

export default HomeC;

const Container = styled.div`
  height: inherit;
  width: 100vw;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 40px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
`;

const GridItem = styled.div`
  border: 1px solid gray;
  padding: 20px;
`
const Part1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
const Part2 = styled.div`
margin-top: 10px;
margin-bottom: 10px;
`
const Part3 = styled.div`
`
const Part1a = styled.div`
flex: 1;
`
const Part1b = styled.div`
flex: 3;
display: flex;
flex-direction: column;
h5 {
  color: #4d13d1;
 }
`
const Buttons = styled.button`
  padding: 20px;
  background-color: white;
  color: #4d13d1;
  border: 0.8px solid gray;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  border-radius: 6px;
`;