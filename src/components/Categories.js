import React from 'react'
import styled from 'styled-components'
import { categories } from '../Data'
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;  
`
const Categ = styled.h1`
  color: gray;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: 2px;
`

const CategContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  &::after{
    content: '';
    border-bottom: 3px solid teal;
    width: 15vw;
    outline:1px ;
    }
  
`
const Categories = () => {
  return (
    <>
      <CategContainer>
              <Categ>CATEGORIES TO BAG</Categ>
      </CategContainer>
    <Container>
   
          {
              categories.map((item) => {
                  return (
                    <CategoryItem item={item} key={item.id }/>
                  )
             }) 
          }
          
      </Container>
      </>
  )
}

export default Categories