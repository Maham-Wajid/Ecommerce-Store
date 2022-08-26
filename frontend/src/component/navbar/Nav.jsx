import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { NavLink, Outlet } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Flip from 'react-reveal/Flip';
import axios from "axios";
import { setCounter } from "../../features/counter/CounterSlice";

const navStyle = {
    backgroundColor: "#1de9b6",
}

const navLinkStyle = {
    textDecoration: "none",
    textUnderline: "none",
    color: "#6a1b9a",
    fontFamily: 'Playfair Display, serif',
}

const badgeStyle = {
    backgroundColor: 'rgb(232,9,235)',
    color: 'white',
    fontSize: '1.3rem',
    fontWeight: '700',
    position: 'relative',
    top: '-22px',
    right: '10px',
}

const Nav = () => {

    const dispatch=useDispatch();


    const totalItems=useSelector(state=>state.counter.value);
    const [itemdata, setdata] = useState(0)

    useEffect(()=>{
        axios.get('http://localhost:4000/cart/get')
            .then((response) => {
                console.log('cart response is:',response.data.length);
                // console.log(response.length)
                dispatch(setCounter(response.data.length))
                // setdata(response.data.length);

                
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    
    // var quantity = itemdata.data.length;

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow" style={navStyle}>
                <div className="container-fluid py-3">
                    <Flip top>
                        <NavLink exact className="h2 fw-bold ms-1" to="/" style={navLinkStyle}> 🏪 Ecommerce Store</NavLink>
                    </Flip>
                    <div>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to="/cartItems" ><ShoppingCartIcon style={{ fontSize: '2.3rem', float: 'left', color: 'black'}} /><span className="badge p-1 px-2 rounded-circle" style={badgeStyle}>{totalItems}</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Nav;