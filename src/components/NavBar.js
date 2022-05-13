import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const Container = styled.div`
    height: 8vh;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchInput = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    justify-content:center;
    margin-left: 25px;
    padding: 4px;
`
const Input = styled.input`
    border: none;
    &:focus{
        outline: none;
    }
`;

const Center = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    letter-spacing:3px;
   
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;
`



const NavBar = () => {
  return (
      <div>
          <Container>
              <Wrapper>
                  <Left>
                      <Language>EN</Language>
                      <SearchInput>
                      <Input></Input>
                          <SearchIcon style={{ color: "gray", fontSize: "16px"}}/>
                      </SearchInput>
                  </Left>
                  <Center><Link to="/" style={{color:'inherit', textDecoration: 'none' }}><Logo>SHEIN.</Logo></Link></Center>
                  <Right>
                      <Link to="/Register" style={{color:'inherit', textDecoration: 'none' }}><MenuItem>Sign Up</MenuItem></Link>
                      <Link to="/Login" style={{color:'inherit', textDecoration: 'none' }}><MenuItem>Sign In</MenuItem></Link>
                      <MenuItem>
                              <Link to="/Cart" style={{ color:'inherit',textDecoration: 'none' }}><Badge badgeContent={2} color="primary">
                           <ShoppingCartOutlinedIcon />
                          </Badge></Link>
                      </MenuItem>
                  </Right>
              </Wrapper>
          </Container>
    </div>
  )
}

export default NavBar