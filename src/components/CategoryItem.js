import React from 'react'
import styled from 'styled-components'
 
const Container = styled.div`
    flex: 1;
    margin: 5px;
    position: relative;
    background: black;
    min-width: 300px;
    height: 60vh;
`
    
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
const Title = styled.h1`
    font-size: 30px;
    color: #f8fcff;
    text-align: center;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    background: white;
    color: gray;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px;
    &:hover{
        color: white;
        background: black;
        transition: all 1s ease;
    }
`

const CategoryItem = ({item}) => {
  return (
      <Container key={item.id}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
          </Info>
    </Container>
  )
}

export default CategoryItem