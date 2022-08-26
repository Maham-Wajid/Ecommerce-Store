import React, { useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import axios from 'axios';
import './Items.css';
import Bounce from 'react-reveal/Bounce';

const backStyle = {
    backgroundColor: 'rgba(3, 223, 131, 0.4)',
}

const Items = () => {

    const [productData, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/product/get')
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <>
            <div className="row p-0 m-0 shadow" style={backStyle}>
                <Bounce >
                    <div className="text-center" id="heading">
                        <p className="h1 text-dark pb-0 my-4" style={{ fontFamily: 'Ultra, serif', }}>Products</p>
                        <hr className="fw-bold w-75 " style={{ display: 'inline-block' }} />
                    </div>
                </Bounce>
                {productData && productData.map((val) => {
                    return (
                        <>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <Card data={val} />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default Items;