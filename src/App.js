// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Layout from './components/Layout/Layout';
import Menu from './components/Menu/Menu';
import IndexPage from './pages/Indexpage';
import AdminDashboard from './components/Admin/adminDashboard';
import { CartProvider } from './components/context/CartContext';
import MenuPage from './components/Customer/MenuPage';
import CartPage from './components/Customer/CartPage';
import CheckoutPage from './components/Customer/CheckoutPage';
import Headers from './components/CustomerHeader/CheckoutHeader';
import PaymentOptionsPage from './components/Customer/PaymentOptions';
import AddMenuItemPage from './components/Admin/AddMenuItemForm';
function App() {
    return (
        <CartProvider>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/header" element={<Header />} />
                <Route path="/hero" element={<Hero />} />
                <Route path="/info" element={<Info />} />
                <Route path="/layout" element={<Layout />} />
                {/* <Route path="/menu" element={<Menu />} /> */}
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/indexpage" element={<IndexPage />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/checkoutheader" element={<Headers />} />
                <Route path="/payment-options" element={<PaymentOptionsPage />} />
                <Route path="/addmenuitem" element={<AddMenuItemPage />} />
                


            </Routes>
        </Router>
        </CartProvider>
    );
}

export default App;
