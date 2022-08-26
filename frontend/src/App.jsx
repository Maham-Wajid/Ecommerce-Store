import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./component/navbar/Nav";
import './index.css';
import Home from "./component/home/Home";
import Detail from "./component/detail/Detail";
import CartItems from "./component/cart/CartItems";


const App = () => {
    return (
        <>
            <BrowserRouter >
                <div className="container-fluid p-0 m-0" >
                    <Nav />
                    
                    <Routes >
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/detail/:id" element={<Detail />} />
                        <Route exact path="/cartItems" element={<CartItems />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </>
    );
}

export default App;