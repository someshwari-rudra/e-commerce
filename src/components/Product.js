import React from 'react'
import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    background: rgba(0,0,0,0.2);
    transition: all 1s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width:300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5fbfd;
    position: relative;
    
    &:hover ${Info}{
        opacity: 1;

    }
`

const Image = styled.img`
    height: 100%;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);

    }


`

const Product = ({item}) => {
  return (
      <Container>
          <Image src={item.img} />
          <Info>
              <Icon>
                  <ShoppingCartOutlinedIcon/>
              </Icon>
               <Icon>
                  <SearchOutlinedIcon/>
              </Icon>
               <Icon>
                  <FavoriteBorderOutlinedIcon/>
              </Icon>
          </Info>

    </Container>
  )
}

export default Product