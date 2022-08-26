import axios from "axios";
import React, { useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CartItem.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItems = () => {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/cart/get')
            .then((response) => {
                setCartProducts(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const remItem = (id) => {
        // console.log(id);
        axios.delete(`http://localhost:4000/cart/del/${id}`).then((response)=>{
            alert('Removed from Cart Successfully!')
        }).catch((error)=>{
            alert(error);
        })
    }

    // console.log(cartProducts);

    return (
        <>
            <div className="row p-0 m-0 justify-content-center">
                <div className="col-11 text-center">
                    <div className="card mt-5 shadow border-0 rounded-2">
                        <div className="card-body">
                            <div className="table-wrapper-scroll-y my-custom-scrollbar border-0">
                                <table className="table table-responsive">
                                    <thead className="h4 text-white" style={{ background: '#9c27b0' }}>
                                        <tr className="border-0 shadow-sm">
                                            <th scope="col" className="mb-0">Sr.no</th>
                                            <th scope="col" className="mb-0">Image</th>
                                            <th scope="col" className="mb-0">Title</th>
                                            <th scope="col" className="mb-0">Price</th>
                                            <th scope="col" className="mb-0">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody className="h5">
                                        {cartProducts && cartProducts.map((val, index) => {
                                            
                                            const cItem = val.Items;
                                            var itemID = '';

                                            return (
                                                <tr className="my-3" style={{ lineHeight: 'unset' }} key={index}>
                                                    <th scope="row" >{index}</th>
                                                    {cItem.map((value) => {
                                                        itemID = value._id;
                                                        {/* console.log(value._id); */}
                                                        return (
                                                            <>
                                                                <td><img src={value.image} alt="..." className="img-fluid" style={{width: '50px', height: '50px'}} /></td>
                                                                <td>{value.title}</td>
                                                                <td>{value.price}</td>
                                                            </>
                                                        )
                                                    })}

                                                    <td>
                                                        <button className="btn border-0 rounded-2 shadow-sm mx-2" ><EditIcon style={{ color: 'green' }} /></button>
                                                        <button className="btn border-0 rounded-2 shadow-sm mx-2" onClick={()=> remItem(itemID)}><DeleteIcon style={{ color: 'red' }} /></button>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItems;