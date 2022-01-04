import { Send } from '@material-ui/icons'
import { mobile } from '../Responsive'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Desc = styled.p`
font-size: 25px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign:"center" })}
`
const InputContainer = styled.div`
width: 50%;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 5px;
border: 1px solid lightgray;
${mobile({ width:"80%" })}
`
const Input = styled.input`
flex: 9;
border: none;
height: 90%;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
background-color: teal;
border: none;
border-radius: 5px;
height: 100%;
cursor: pointer;
color: white;

&:hover{
    transform: scale(1.1);
    background-color: teal;
    color: black;
}
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely update on your favourite products</Desc>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
