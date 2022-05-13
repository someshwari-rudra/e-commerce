import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
 
const Container = styled.div`
    height: 60vh;
    background: rgba(252, 191, 187,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`
const Desc = styled.p`
    font-size: 24px;    
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Input = styled.input`
    border: none;
    padding-left: 20px;
    flex: 8;
    &:focus{
        outline: none;
        border: none;
    }
`
const Button = styled.button`
    flex: 1;
    padding: 6.5px;
    background: teal;
    border: none;
    cursor: pointer;
    
`

const NewsLetter = () => {
  return (
      <Container>
          <Title>New letter</Title>
          <Desc>Get Timely updates from your favorite products</Desc>
          <InputContainer>
              <Input  placeholder='Your Email'/>
              <Button>
                  <SendIcon/>
              </Button>
          </InputContainer>
    </Container>
  )
}

export default NewsLetter