import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Container = styled.div`
    display: grid;
    grid-template-columns: 5rem 1fr 1fr 1fr 5rem;
    grid-gap: 1rem;
    align-items: center;
    justify-content: center;
`
const Left = styled.div`
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
    text-align: justify;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`
const Center = styled.div`
    grid-column: 3/4;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
     margin-bottom: 10px;
`

const Right = styled.div`
     grid-column: 4/5;
     padding: 20px;
    
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>SHEIN.</Logo>
              <Desc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999"><FacebookIcon/></SocialIcon>
                  <SocialIcon color="E4405F"><InstagramIcon/></SocialIcon>
                  <SocialIcon color="55ACEE"><TwitterIcon/></SocialIcon>
                  <SocialIcon color="E60023"><PinterestIcon/></SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Usefull Links</Title>
              <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right>
                <Title>Contact</Title>
                <ContactItem>
                <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}} /> contact@Somya.rudra
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
    </Container>
  )
}

export default Footer