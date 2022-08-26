import React from "react";
import { NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import pImg from '../../asset/img/1.jpg';
import './Items.css';

const TitleStyle = {
    textTransform: 'capitalize', 
    textShadow: 'none', 
    color: '#6a1b9a',
    textOverflow: 'ellipsis',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontWeight: '700',
}

const Card = ({ data }) => {
    return (
        <>
            <div className="card shadow-sm bg-white border-0 mt-5 mb-2 mx-auto py-3" style={{ width: '90%', fontFamily: 'PT Serif, cursive', }} >
                <img src={data.image} className="card-img-top img-fluid my-1 p-3" style={{ height: '250px' }} alt="..." />
                <div className="card-body text-center">
                    <h3 className="card-title " style={TitleStyle}>{data.title}</h3>
                    <hr className="w-75 mx-auto my-0" />
                    <div className="card-text py-3">
                        <p id="price" className="h3 text-dark fw-bold mb-0">${data.price}</p>
                    </div>
                    <NavLink exact to={`/detail/${data._id}`} className="btn btn-success bg-gradient text-white" style={{ fontSize: '20px', }}  > Product Details </NavLink>
                </div>
            </div>
        </>
    );
}

export default Card;