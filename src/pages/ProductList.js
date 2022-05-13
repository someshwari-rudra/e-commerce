import React from 'react'
import styled from "styled-components"
import NavBar from "../components/NavBar"
import Anouncement from "../components/Anouncement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import Products from "../components/Products"

const Container = styled.div`

`
 const Title = styled.h3``
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

 `
const Filter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
 `
const FilterText = styled.div`
 margin-right: 20px;
 `
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
 const Option = styled.option``

const ProductList = () => {
  return (
      <Container>
          <NavBar />
          <Anouncement />
          <Title></Title>
          <FilterContainer>
              <Filter>
                  <FilterText>Filter Products:</FilterText>
                  <Select>
                      <Option disabled selected>Color</Option>
                       <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                  </Select>
                  <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
              </Filter>
              <Filter>
                  <FilterText>Sort Products:</FilterText>
                  <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                 </Select>
              </Filter>
          </FilterContainer>
          <Products/>
          <NewsLetter />
          <Footer/>
    </Container>
  )
}

export default ProductList