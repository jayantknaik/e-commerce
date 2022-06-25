import './product.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) =>
{ 
    const navigate = useNavigate();
    return (
        <div className="Product" key={props.data.id} onClick={() =>
        { 
            navigate(`/description/${props.data.id}`);
        }}>
                <div className="image">
                    <img src={props.data.image} alt="product" />
                </div>
                <div className="description">
                    <h1>{ props.data.name }</h1>
                    <h2>₹{ props.data.price }</h2>
                <h5>{props.data.description}</h5>
                <div className="mid-btn">
                    <button id='cart-btn'>ADD TO CART</button>
                </div>
                </div>
        </div>
    )
}

export default Product;