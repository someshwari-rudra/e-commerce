import React from 'react'
import NavBar from "../components/NavBar"
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,
    url("/images/login.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 25%;
    border-radius: 10px;
    background: white;
`
const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Input = styled.input`
    margin: 10px 10px;
    padding: 10px 5px;
    font-size: 16px;
`

const Button = styled.button`
    padding: 10px; 
    margin: 10px;
    background: teal;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 18px;
`


const Login = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="User Name"/>
                        <Input placeholder="password"/>
                        <Button>LOGIN</Button>
                    </Form>
                </Wrapper>
            </Container>
    </>
  )
}

export default Login