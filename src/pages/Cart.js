import React from 'react'
import styled from "styled-components"
import Anouncement from '../components/Anouncement'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    text-align: center;
    color: gray;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TopButton = styled.button`
    padding: 10px;
    background: ${props => props.type === "checked" ? "black" :"transparent"} ;
    border: ${props => props.type === "checked" && "none"};
    Color:${props=>props.type === "checked" && "white"};
`
const TopTexts = styled.div``
const TopText = styled.span`
    margin-right: 20px;
    text-decoration: underline;
`
const Bottom = styled.div`
    display: flex;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    flex: 2;
    display: flex;
`

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    flex: 1;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
`
const ProductName = styled.span`
`
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
`
const ProductSize = styled.p``
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Amount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 24px;
`
const Hr = styled.hr`
 background-color: #eee;
  border: none;
  height: 1px;

`


const Summary = styled.div`
    flex: 1;
    padding: 20px;
    border: 2px solid #eee;
    margin:20px 20px 20px 0px;
    border-radius: 20px;
`
const SummaryTitle = styled.h1`
    margin: 20px;
    font-weight: 200;
`
const SummaryDetails = styled.p`
    display: flex;
    justify-content: space-between;
    margin: 30px 10px;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
    
`
const SummaryItem =styled.div``
const SummaryPrice =styled.div``
const Button = styled.button`
width: 100%;
background: black;
padding: 10px;
color: white;
margin-top: 20px;

`


const Cart = () => {
  return (
      <Container>
          <NavBar />
          <Anouncement />
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag(2)</TopText>
                      <TopText>Your Wishlist (0)</TopText>
                  </TopTexts>
                  <TopButton type="checked">CHECKOUT NOW</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      <Product>
                      <ProductDetails>
                          <Image src='/images/products/1.png' />
                          <Details>
                              <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                              </ProductName>
                              <ProductId>
                                   <b>ID:</b> 93813718293
                              </ProductId>
                              <ProductColor color="Black"/>
                              <ProductSize>
                                   <b>Size:</b> 37.5
                              </ProductSize>
                          </Details>
                      </ProductDetails>
                      <PriceDetails>
                          <ProductAmountContainer>
                              <AddIcon />
                              <Amount>1</Amount>
                              <RemoveIcon />
                              </ProductAmountContainer>
                              <ProductPrice>$ 45</ProductPrice>
                          </PriceDetails>
                      </Product>
                      <Hr />
                       <Product>
                      <ProductDetails>
                          <Image src='/images/products/1.png' />
                          <Details>
                              <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                              </ProductName>
                              <ProductId>
                                   <b>ID:</b> 93813718293
                              </ProductId>
                              <ProductColor color="yellow" />
                              <ProductSize>
                                   <b>Size:</b> 37.5
                              </ProductSize>
                          </Details>
                      </ProductDetails>
                      <PriceDetails>
                          <ProductAmountContainer>
                              <AddIcon />
                              <Amount>1</Amount>
                              <RemoveIcon />
                              </ProductAmountContainer>
                              <ProductPrice>$ 20</ProductPrice>
                          </PriceDetails>
                        </Product>
                  </Info>
                  <Summary>
                      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                      <SummaryDetails>
                          <SummaryItem>Subtotal</SummaryItem>
                          <SummaryPrice>$ 45</SummaryPrice>
                      </SummaryDetails>
                       <SummaryDetails>
                          <SummaryItem>Estimated Shipping</SummaryItem>
                          <SummaryPrice>$ 20</SummaryPrice>
                      </SummaryDetails>
                       <SummaryDetails>
                          <SummaryItem>Shipping Discount</SummaryItem>
                          <SummaryPrice>$ -5.0</SummaryPrice>
                      </SummaryDetails>
                       <SummaryDetails type="total">
                          <SummaryItem>Total</SummaryItem>
                          <SummaryPrice>$ 80</SummaryPrice>
                      </SummaryDetails>
                      <Button>CHECKOUT NOW</Button>
                  </Summary>
              </Bottom>
          </Wrapper>
          <Footer/>
    </Container>
  )
}

export default Cart