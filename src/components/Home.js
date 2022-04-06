import React from "react";
import HomeA from "./HomeA";
import HomeB from "./HomeB";
import HomeC from "./HomeC";
import styled from 'styled-components'

function Home() {
  return (
    <Container>
      <HomeA />
      <HomeB/>
      <HomeC/>
    </Container>
  );
}

export default Home;

const Container = styled.div`
   ${'' /* width: 100vw; */}
   margin: auto;
`
