// import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Route, Routes} from "react-router-dom";
import Product from "./modules/Product";
import Prodcuts from "./modules/Products";
import CategoryProducts from "./modules/CategoryProducts";
import Cart from "./modules/Cart";
import LoginPage from "./components/Login";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      <Route path="/products" element={<Prodcuts/>} />
      <Route path="/categories/:name" element={<CategoryProducts/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="*" element={<div>404</div>}  />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignUp/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
