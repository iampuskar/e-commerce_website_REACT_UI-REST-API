import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../Responsive'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../requestMethod'
import {useNavigate} from 'react-router-dom'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
${mobile({ padding:"10px" })}

`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
padding: 30px;
display: flex;
align-items: center;
justify-content: space-between;

`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" ? "none" : "1px solid grey"};
background-color: ${props=>props.type === "filled" ? "teal" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
${mobile({ display:"none" })}
`
const TopText = styled.span`
margin: 0px 10px;
text-decoration: underline;
cursor: pointer;
`


const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection:"column" })}
`
const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection:"column" })}
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const ProductName = styled.div`

`
const ProductID = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin:"5px 15px" })}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
${mobile({ marginBottom:"20px" })}
`

const Hr = styled.hr`
border: none;
background-color: whitesmoke;
height: 1.5px;
`

const SummaryTitle = styled.h1`
font-weight: 200;

`
const SummaaryItem = styled.div`
margin:30px 0px ;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaaryItemText = styled.span``
const SummaaryItemPrice = styled.span``
const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color: teal;
font-weight: 600;
color: white;
border: none;
cursor: pointer;
transition:all .3s ease ;

&:hover{
    transform: scale(0.9);
    background-color: black;
}
`



const Cart = () => {

    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();


    const onToken = (token)=>{
        setStripeToken(token);

    }
    useEffect(() => {
        const makeRequest = async ()=>{
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    // amount: cart.total * 100,
                    amount: 500,
                    
                });
                navigate("/success", {
                    data: res.data,
                    products: cart,
                });
                
            }catch(err){
                console.log(err)
            }
        }
       stripeToken &&  makeRequest();
    //    cart.total >= 1 &&
    }, [stripeToken, cart.total, navigate])
    
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                       {cart.products.map(product => (
                        <Product> 
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b>{product.title}</ProductName>
                                    <ProductID><b>ID:</b> {product._id}</ProductID>
                                    <ProductColor color = {product.color}/>
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>

                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                               <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>{product.quantity}</ProductAmount>
                                   <Remove/>
                               </ProductAmountContainer>
                               <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))
                        }
                        <Hr/>
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaaryItem>
                            <SummaaryItemText>Subtotal</SummaaryItemText>
                            <SummaaryItemPrice>$ {cart.total}</SummaaryItemPrice>
                        </SummaaryItem>
                        <SummaaryItem>
                            <SummaaryItemText>Estimated shipping</SummaaryItemText>
                            <SummaaryItemPrice>$ 5.90</SummaaryItemPrice>
                        </SummaaryItem>
                        <SummaaryItem>
                            <SummaaryItemText>Shipping Discount</SummaaryItemText>
                            <SummaaryItemPrice>$ -5.90</SummaaryItemPrice>
                        </SummaaryItem>
                        <SummaaryItem type="total">
                            <SummaaryItemText >Total</SummaaryItemText>
                            <SummaaryItemPrice>$ {cart.total}</SummaaryItemPrice>
                        </SummaaryItem>
                        <StripeCheckout
                         name='E-commerce Shop'
                         image='https://avatars.githubusercontent.com/u/1486366?v=4'
                         billingAddress
                         shippingAddress
                         description={`Your total is $${cart.total}`}
                         amount={cart.total*100}
                         token={onToken}
                         stripeKey='pk_test_51KA8C4ILQKKDR0Hp5mOxBqW5k6n4l7SoHUgG7iowG71CsUzufxezdf6cyFjOIIhjRJ1kKNUJrnxHlzw8paaAg7tB00Jrpn7r3B'
                        >
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
