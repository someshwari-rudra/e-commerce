import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    display:flex;
    background: teal;
    justify-content: center;
    align-items: center;
    color: white;
`

const Anouncement = () => {
  return (
      <>
          <Container>Supper Deals Free shipping on order over $50</Container>
    </>
  )
}

export default Anouncement