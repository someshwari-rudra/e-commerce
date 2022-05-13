import React from 'react'
import styled from "styled-components"
import {popularProducts} from "../Data"
import Product from './Product'

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
`
// const Categ = styled.h1`
//   color: gray;
//   text-align: center;
//   margin-top: 20px;
//   margin-bottom: 10px;
//   letter-spacing: 2px;
// `

// const CategContainer = styled.div`
//   text-align: center;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//   &::after{
//     content: '';
//     border-bottom: 3px solid teal;
//     width: 15vw;
//     }
  
// `

const Products = () => {
    return (
        <>
        {/* <CategContainer>
            <Categ>POPULAR PRODUCTS</Categ>
        </CategContainer> */}
      <Container>
          {
              popularProducts.map((item) => {
                  return (
                      <Product item={item} key={ item.id}/>
                  )
              })
          }
          
        </Container>
     </>
  )
}

export default Products