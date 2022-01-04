import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import {mobile} from '../Responsive'
import {useDispatch, useSelector} from 'react-redux'

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,128,0.5)), 
url("https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 25%;
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
flex-direction: column;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
height: 40%;
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
margin-bottom: 10px;

&:disabled{
    color: gray;
    cursor: not-allowed;
}

&:hover{
    background-color: green;
    transform: scale(0.9);
}
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

&:hover{
    color: blue;
}
`
const Error = styled.span`
color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {isFetching,error} = useSelector((state)=> state.user)
    
    const handleClick = (e)=>{
        e.preventDefault()
        login(dispatch, {username, password})
    }
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
                    <Input placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went Wrong !!</Error>}
                    <Link>FORGET A PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
