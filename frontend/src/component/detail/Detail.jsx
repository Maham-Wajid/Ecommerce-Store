import React, { useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from 'react-redux';
import { increment } from "../../features/counter/CounterSlice";

const favStyle = {
    display: 'inline-block',
    padding: '10px',
}

const Detail = () => {

    const [curID, setID] = useState([]);
    const { id } = useParams();

    const quantity = useSelector((state)=>state.counter.value);

    useEffect(() => {
        
        axios.get(`http://localhost:4000/product/get/${id}`)
            .then((response) => {
                setID(response.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [id])

    const dispatch = useDispatch();

    const addToCart = () =>{
        if(dispatch(increment())){
            alert('Product is added to Cart!')
        }


        console.log('before  adding in cart curId and quantity is:',curID,quantity);
        axios.post('http://localhost:4000/cart/add', {curID, quantity})
        .then((response) => {
            console.log(response);
            // setProduct(response.data);
        })
        .catch((error) => {
            console.log('add to cart request failed');
            console.log(error);
        })
    }

    // console.log(curID)

    return (
        <>
            <div className="row p-0 m-0">
                <div className="Prodheading my-4 text-center mx-auto">
                    <p className="h1 shadow mx-auto  p-4 my-0" style={{ fontFamily: 'Monoton, cursive', color: 'rgb(232,9,235)', fontWeight: '500' }}>Product Details</p>
                </div>

                <div className="col-lg-5 col-md-4 col-12 text-center py-5">
                    <div className="card shadow border-0  my-auto float-md-end " style={{ width: '80%'}}>
                        <div className="card-image p-3">
                            <img src={curID.image} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-8 col-12 py-5">
                    <div className="card shadow border-0  my-auto ps-4 mx-auto" style={{ width: '80%', float: 'left', fontFamily: 'Noto Serif, serif', }}>

                        <div className="productDetails">
                            <p className="mb-0 py-4 h2 card-title" style={{ color: 'rgba(2,189,142)' }}>{curID.title}</p>
                            <p className="pb-3 h3 " style={{ fontFamily: 'Tinos, serif', fontWeight: '550' }}>Price: <span style={{ fontFamily: 'Anton, sans-serif', }}>$ {curID.price} </span> </p>
                            <p className="h3 pb-3" style={{ fontFamily: 'Tinos, serif', fontWeight: '550' }}>Category: <span className="h4" style={{ fontFamily: 'Anton, sans-serif', }}> { curID.category }</span> </p>
                            <details>
                                <summary className="h3" style={{ fontFamily: 'Tinos, serif', fontWeight: '550' }}>Description:</summary>
                                <p style={{ fontFamily: 'Merriweather, serif', lineHeight: '2', wordSpacing: '2' }}> {curID.description} </p>
                            </details>
                        </div>

                        <div className="my-3 row">
                            <div className="col-2 text-center">
                                <div className="card border-0 shadow-sm " style={favStyle}>
                                    <FavoriteBorderIcon fontSize="large" />
                                </div>
                            </div>
                            <div className="col-9 text-center">
                                <button className="btn border-0 shadow-sm cartBtn w-100 text-white" onClick={addToCart}> Add To Cart <AddShoppingCartIcon /> </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
};

export default Detail;