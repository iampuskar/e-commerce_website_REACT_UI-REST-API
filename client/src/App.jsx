import React from 'react'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Success from './pages/Success'
import { useSelector } from 'react-redux'

export default function App() {
    const user = useSelector((state=>state.user.currentUser))
    return (
        <Router>
            <Routes>
            <Route path="/" caseSensitive={false} element={ <Home />} />
            <Route path="/products/:category" caseSensitive={false} element={ <ProductList />} />
            <Route path="/product/:id" caseSensitive={false} element={ <Product />} />
            <Route path="/cart" caseSensitive={false} element={ <Cart />} />
            <Route path="/login" caseSensitive={false} element={ user? <Redirect to= "/"/> : <Login />} />
            <Route path="/register" caseSensitive={false} element={ <Register />} />
            <Route path="/success" caseSensitive={false} element={ <Success />} />
            </Routes>
        </Router>
    );
};
