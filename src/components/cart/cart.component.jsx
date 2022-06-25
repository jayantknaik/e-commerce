import './cart.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/productSlice';

const Cart = () =>
{
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value);
    let cartItems = products.filter((res) =>
    {
        return res.quantity > 0;
    })

    let subtotal = 0;
    cartItems.forEach((res) =>
    {
        subtotal += parseFloat(res.price) * parseInt(res.quantity);
    })

    return (
        <div className="Cart">
            <h1>Shopping Cart</h1>
            <div className="cartItems">
                {
                    cartItems.map((res) =>
                    {
                        return (
                            <div className="cartCard" key={res.id}>
                                <div className="image">
                                    <img src={res.image} alt="" />
                                </div>
                                <div className="description-cart">
                                    <div>
                                        <h1>{res.name}</h1>
                                        <h3>PRICE: {res.price}</h3>
                                        <div class="quantity"> 
                                            <h3>QUANTITY: <button class="change-btn" onClick={dispatch(increment(res.id))} >+</button> {res.quantity} <button class="change-btn" onClick={dispatch(decrement(res.id))}>-</button></h3>
                                        </div>
                                        <h3>TOTAL PRICE: {parseFloat(res.price) * parseInt(res.quantity)}</h3>
                                    </div>
                                    <div>
                                        <button type='button' id='buy-now' onClick={() => { localStorage.removeItem(res.id) }}>REMOVE ITEM</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="mid">
                    <h3>Subtotal: {subtotal}</h3>
                    <Link to='/success'>
                        <button type='button' id="buy-now" onClick={() =>
                        {
                            localStorage.clear();

                        }} >BUY NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;