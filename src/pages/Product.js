import React from 'react'
import styled from "styled-components"
import NavBar from "../components/NavBar"
import Anouncement from "../components/Anouncement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
`
const ImgContainer = styled.div`
  flex:1;
`
const Image = styled.img`
  width: 70%;
  object-fit: cover;
`
const InfoContainer = styled.div`
   flex:1;
   padding:60px;
   margin-top: 20px;
`
const Title = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;
`
const Desc = styled.p`
  margin: 25px 0px;

`
const Price = styled.span`
  font-size: 30px;
  font-weight: 200;
`
const FilterContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const FilterTitle = styled.h3`
  font-weight: 200;
  font-size: 20px;
  margin-right: 10px;
`
const FilterColor = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${props=>props.color};
`
const FilterSize = styled.select`
  padding:10px 20px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 60%;
`
const Amount = styled.span`
 width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 10px 20px;
  background: white;
  border: 2px solid teal;
  cursor: pointer;

`
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const Product = () => {
  return (
    <Container>
      <NavBar />
      <Anouncement />
      <Wrapper>
        <ImgContainer>
          <Image src='images/products/3.png'/>
        </ImgContainer>
        <InfoContainer>
          <Title>Casual Regular Top</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkBlue"/>
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
            <Amount>1</Amount>
            <AddIcon  />
            </AmountContainer>
          <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <NewsLetter />
      <Footer/>

    </Container>
  )
}

export default Product