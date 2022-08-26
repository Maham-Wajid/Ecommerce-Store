import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/Header'
import Item from '../items/Items'
import './Home.css';
import bg from '../../asset/img/bg.gif';

const bgStyle = {
    backgroundImage: `url('${bg}')`,
    backgroundRepeat: 'no-repeat',
    height: '70vh',
    backgroundSize: 'cover',
}

const Home = () => {
    return (
        <>
            <div className="row p-0 m-0" >
                <div className="col-12" style={bgStyle}>
                    <Header />
                </div>

                <div className="col-12 p-0 mx-0">
                    <Item />
                </div>
            </div>
        </>
    );
}

export default Home;