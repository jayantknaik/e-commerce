import './product.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) =>
{ 
    const navigate = useNavigate();
    return (
        <div className="Product" key={props.id} onClick={() =>
        { 
            localStorage.setItem(props.id, JSON.stringify(props));
            navigate(`/description/${props.id}`);
        }
}>
                <div className="image">
                    <img src={props.image} alt="product" />
                </div>
                <div className="description">
                    <h1>{ props.name }</h1>
                    <h2>₹{ props.price }</h2>
                    <h5>{ props.description }</h5>
                </div>
        </div>
    )
}

export default Product;