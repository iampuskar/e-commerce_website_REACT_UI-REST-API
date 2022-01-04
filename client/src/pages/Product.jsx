import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile} from '../Responsive'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethod'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div``
const Wrapper = styled.div`
display: flex;
padding: 50px;
${mobile({ padding:"10px", flexDirection:"column" })}
`
const ImgContainer = styled.div`
flex: 1;
margin-right: 30px;
`
const Image = styled.img`
width: 100%;
height: 70vh;
object-fit: cover;
${mobile({ height:"30vh" })}
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({ padding:"10px" })}

`
const Title = styled.h1`
font-size: 50px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ fontSize:"36px" })}
`
const Desc = styled.p`
font-size: 20px;
font-weight: 200;
margin: 20px 0px;
`
const Price = styled.span`
font-size: 40px;
font-weight: 200;
`

const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
margin: 30px 0px;
${mobile({ width:"95%" })}

`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const Filtercolor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
transition: all .3s ease;

&:hover{
    transform: scale(1.2);
}
`
const Select = styled.select`
margin-left: 10px;
padding: 5px;
`
const Option = styled.option`
color: teal;
font-size: 15px;
`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width:"95%" })}
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
`
const Amount = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border: 1.5px solid teal;
border-radius: 10px;
margin: 0px 5px;
`
const Button = styled.button`
padding: 15px;
background-color: teal;
border: none;
color: white;
font-size: 16px;
font-weight: 500;
cursor: pointer;
transition: all .3s ease;

&:hover{
    background-color: green;
    color: white;
    transform: scale(1.1);
}
`

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async ()=> {
            try{
              const res = await publicRequest.get("/products/find/"+id);
              setProduct(res.data);


            }catch(err){
                console.log(err);

            }
        };

        getProduct();
        
    }, [id])

const handleQuantity = (type) =>{
    if (type === "desc"){
        quantity > 1 && setQuantity(quantity-1 );
    }else{
        setQuantity(quantity+1);
    }

}

const handleClick = ()=>{
     dispatch( addProduct({...product, quantity, color, size }));
    //  console.log(product);
};
    return (
        <Container>
            <Navbar/>
            <Announcement/>

            <Wrapper>
                <ImgContainer>
                    <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c)=>(

                        <Filtercolor color = {c} key={c} onClick={()=>setColor(c)}/>
                        
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <Select onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s) =>(
                            <Option Selected key={s}>{s} </Option>
                            ))}
                            
                        </Select>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("desc")}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>Add to Cart</Button>
                </AddContainer>
                </InfoContainer>     
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
