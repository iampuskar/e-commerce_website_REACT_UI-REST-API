import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../Responsive'

const Container = styled.div`
display: flex;
padding: 20px;
background-color: teal;
${mobile({ flexDirection:"column" })}
`

const Left = styled.div`
flex: 1;
padding: 20px;
color: white;
`
const Center = styled.div`
flex: 1;
padding: 20px;
color: white;
${mobile({ display:"none" })}
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`

const Right = styled.div`
flex: 1;
padding: 20px;
color: white;

`
const Logo = styled.h2``
const Desc = styled.p`
margin: 20px 0px; 
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white ;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const ContactItems = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`
const Payment = styled.img`
width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E-COMMERCE</Logo>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                
                </Desc>
                <SocialContainer>
                    <SocialIcon  color="385999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man fashion</ListItem>
                    <ListItem>women fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItems> <Room style={{marginRight:"10px"}}/> Koteshwor-32, Kathmandu, Nepal</ContactItems>
                <ContactItems> <Phone style={{marginRight:"10px"}}/> +977 9841111285</ContactItems>
                <ContactItems> <MailOutline style={{marginRight:"10px"}}/> puskar93@gmail.com</ContactItems>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer