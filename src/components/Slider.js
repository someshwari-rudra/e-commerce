import React, { useState } from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import styled from "styled-components"
import { SliderItems } from "../Data";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #eee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left:${props => props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.sliderIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slides = styled.div`
    display: flex;
    width: 100vw;
    align-items: center;
    background: #${props=>props.bg};
`
const ImgContainer = styled.div`
    flex:1;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    
`
const InfoContainer = styled.div`
    flex:1;
`
const Title = styled.h1`
    font-size: 60px;
`
const Desc = styled.p`
    font-weight: 600;
    letter-spacing: 3px;
    margin: 40px 0;
    width: 70%;
`
const Button = styled.button`
    padding: 10px 30px;
    background: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [sliderIndex, setsliderIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setsliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
        } else {
            setsliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
        }
    }
  return (
      <Container>
          <Arrow direction="left" onClick={()=>handleClick("left")}>
              <ArrowLeftIcon />
          </Arrow>
          <Wrapper sliderIndex={sliderIndex}>
              {SliderItems.map((item) => {
                  return (
                    <Slides bg={item.bg} key={item.id}>
                        <ImgContainer>
                              <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                        <Title>{item.title} </Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slides> 
                      
                  )
              })}
          </Wrapper>
          <Arrow direction="right" onClick={()=>handleClick("right")}>
              <ArrowRightIcon />
          </Arrow>
    </Container>
  )
}

export default Slider