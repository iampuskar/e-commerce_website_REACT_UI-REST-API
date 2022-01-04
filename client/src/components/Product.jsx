import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import React from 'react'
// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
// import { publicRequest } from '../requestMethod'

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,128,128,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
flex: 1;
margin: 20px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

&:hover ${Info}{
    opacity: 1;
}
`

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: grey;
position: absolute;
`
const Image = styled.img`
width: 100%;
height: 83%;
object-fit: cover;
z-index: 2;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.2);
}
`



const Product = ({item}) => {
    
    return (
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>                
                </Icon>
                <Icon>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                </Link>
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
