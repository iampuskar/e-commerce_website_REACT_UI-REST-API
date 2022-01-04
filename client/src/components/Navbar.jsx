import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
// import Announcement from './Announcement'
import {mobile} from "../Responsive"
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'


const Container = styled.div`
height: 60px;
${mobile({ height:"50px" })}
`

const Wrapper = styled.div`
padding: 15px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding:"10px 0px" })}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
${mobile({ marginLeft: "-14px" })}

`
const Language = styled.div`
/* color: white; */
cursor: pointer;
${mobile({ display:"none" })}
`
const SearchComponent = styled.div`
/* color: white; */
cursor: pointer;
border: 1px solid lightgray ;
display: flex;
margin-left: 40px;
padding: 5px;

`
const Input = styled.input`
color: black;
cursor: pointer;
border: none;
margin-right: 5px;
${mobile({ width:"70px" })}
`
const Center = styled.div`
/* color: white; */
flex: 1;
text-align: center;
${mobile({ textAlign:"center" })}
`
const Logo = styled.div`
/* font-size: x-large; */
font-weight: bold;
${mobile({ fontSize:"9px", marginLeft: "14px" })}
`
const Right = styled.div`
/* color: white; */
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 15px;
${mobile({ flex:2, justifyContent:"center" })}
`
const MenuItem = styled.div`
/* color: white; */
font-size: 14px;
margin-left: 25px;
${mobile({ fontSize:"12px", marginLeft: "10px" })}
`
const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    
    return (
        <Container>
            <Wrapper>
                    <Left> 
                    <Language>EN</Language> 
                    <SearchComponent>
                        <Input placeholder="Search"/>
                        <Search style= {{color:"red", fontSize:"14px"}}/>
                    </SearchComponent>
                    </Left>
                  
                    <Center> 
                    <Logo>E-COMMERCE.</Logo>
                     </Center>

                    <Right> 
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <Link to="/cart">
                    <MenuItem> 
                    <Badge badgeContent={quantity} color="secondary">
                         <ShoppingCartOutlined color="action" />
                    </Badge> 
                    </MenuItem>
                     </Link>
                    
                     </Right>
                        
                     </Wrapper>
        </Container>
    )
}

export default Navbar
