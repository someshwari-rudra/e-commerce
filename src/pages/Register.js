import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,
    url("/images/registration.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 30%;
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
    flex-wrap: wrap;
    padding: 20px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 10px;
    padding: 10px 5px;
`
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    padding: 10px 10px; 
    margin: 10px 20px;
    width: 100%;
    background: teal;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 18px;
`

const Register = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="First Name"/>
                        <Input placeholder="Last Name"/>
                        <Input placeholder="User Name"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="Password"/>
                        <Input placeholder="Confirm Password" />
                        <Agreement>  By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                    </Form>
                </Wrapper>
                </Container>
    </>
  )
}

export default Register