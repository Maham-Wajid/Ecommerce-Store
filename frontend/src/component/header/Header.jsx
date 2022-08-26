import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Tada from 'react-reveal/Tada';
import Zoom from 'react-reveal/Zoom';
import shopImg from '../../asset/img/shop.png'

const tagLineStyle = {
    color: '#1de9b6',
    textTransform: 'capitalize',
    fontFamily: 'Lora, serif',
    fontStyle: 'italic',
    fontWeight: '700',
}

const Header = () => {
    return (
        <>
            <div className="row justify-content-center align-items-center p-0 m-0" style={{ height: '70vh' }}>
                <div className="col-md-7 col-sm-6 text-center">
                    <Tada>
                        <h1 className="align-middle" style={{ color: '#6a1b9a', textTransform: 'capitalize', fontFamily: 'Lora, serif', }}>welcome to ecommerce shopping store</h1>
                    </Tada>
                    <Zoom>
                        <p className="h4 fw-bold" style={tagLineStyle}>shop online, make life easy</p>
                    </Zoom>
                </div>
                <div className="col-md-5 col-sm-6 text-center">
                    <img src={shopImg} className="img-fluid" alt="shopImage"/>
                </div>
            </div>
        </>
    );
}

export default Header;