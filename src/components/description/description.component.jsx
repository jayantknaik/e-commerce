import './description.css';
import React, {useState} from 'react';
import { changeQuantity } from '../../features/productSlice';
import { useDispatch } from 'react-redux';

const Description = (props) =>
{
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();
    
    const selectQuantity = () =>
    {
        setQuantity(document.getElementById("quantity").value);
    }
    
    const addToCart = () =>
    {
        dispatch(changeQuantity({productId: props.data.id, quantity}));

    }

    return (
        <div className="Description">
            <div className='image'>
                <img id="image" src={props.data.image} alt="" />
            </div>
            <div className='description'>
                <h1>{props.data.name}</h1>
                <h2>₹{props.data.price}</h2>
                <h4>{props.data.description}</h4>
                <div className='buttons'>
                    <select name="quantity" id="quantity" onChange={()=>selectQuantity()}>
                        <option value="">Select quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button type="button" onClick={() => addToCart()}>ADD TO CART</button>
                </div>
            </div>
       </div>
    )
}

export default Description;