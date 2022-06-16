import './description.css';
import React from 'react';

const Description = (props) =>
{
    const tempDesc = JSON.parse(localStorage.getItem(props.data.id));
    const selectQuantity = () =>
    {
        props.data.quantity = document.getElementById("quantity").value;
    }
    const addToCart = () =>
    {
        localStorage.setItem(props.data.id, JSON.stringify(props.data));
    }

    return (
        <div className="Description">
            <div className='image'>
                <img id="image" src={tempDesc.image} alt="" />
            </div>
            <div className='description'>
                <h1>{tempDesc.name}</h1>
                <h2>₹{tempDesc.price}</h2>
                <h4>{tempDesc.description}</h4>
                <div className='buttons'>
                    <select name="quantity" id="quantity" onChange={()=>selectQuantity()}>
                        <option value="">Select quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="button" onClick={()=> addToCart()}>ADD TO CART</button>
                </div>
            </div>
       </div>
    )
}

export default Description;