import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,128,0.5)), 
url("https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;
${mobile({ width:"76%" })}
`
const Title = styled.h1`
font-weight: 300;
font-size: 24px;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
height: 40%;
`
const Aggrement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 30%;
border: none;
padding: 15px;
background-color: teal;
color: white;
font-size: 16px;
font-weight: 400;
transition: all .3s ease;
cursor: pointer;

&:hover{
    background-color: green;
    transform: scale(0.9);
}
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Aggrement>By creating an account, I concent to the processing
                     of my personal data in accordance with the <b>PRIVACY POLICY</b></Aggrement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
