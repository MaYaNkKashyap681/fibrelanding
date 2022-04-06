import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <Wrapper>
           <Part1>
              <h2>Fibre</h2>
              <p>With Fibre, you can setup your own personal portfolio in minutues with dozens of premade, beautiful templates.</p>
              <TagP>Made with Love in the India</TagP>
           </Part1>
           <Part2>
           <Grid>
           <GridItem>
             <GridHeading>Sitemap</GridHeading>
             <LItem>Homepage</LItem>
             <LItem>Pricing</LItem>
             <LItem>Testimonial</LItem>
             <LItem>Features</LItem>
           </GridItem>
           <GridItem>
             <GridHeading>Resourses</GridHeading>
             <LItem>Support</LItem>
             <LItem>Contact</LItem>
             <LItem>FAQ</LItem>
           </GridItem>
           <GridItem>
             <GridHeading>Company</GridHeading>
             <LItem>About</LItem>
             <LItem>Customers</LItem>
             <LItem>Blog</LItem>
           </GridItem>
           <GridItem>
             <GridHeading>Portfolios</GridHeading>
             <LItem>Sarah Andrews</LItem>
             <LItem>Mathew Higgins</LItem>
             <LItem>Janice Dave</LItem>
           </GridItem>
           </Grid>
           </Part2>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  height: inherit;
  width: 100vw;
  margin-top: 20px;
  background-color: #fbf8f3; 
  padding: 30px; 
`

const Wrapper = styled.div`
   width: 80%;
   margin: auto;
   display: flex;
   flex-direction: row;

   @media (max-width: 980px) {
    flex-direction: column;
  }
`

const Part1 = styled.div`
flex: 3;
padding-bottom: 20px;

p {
  font-size: 18px;
  font-weight: 260;
  margin-top: 16px;
}
`

const Part2 = styled.div`
 flex: 5;
`

const Grid = styled.div`
 display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
`

const TagP = styled.p`
  margin-top: 30px;
  font-weight: 200;
  color: gray;
`

const GridItem = styled.div`

`

const GridHeading = styled.h3`
   margin-bottom: 10px;
`

const LItem = styled.p`
    font-weigth: 200;
    color: gray;
`