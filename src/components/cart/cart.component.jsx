import './cart.css'
import { Link } from 'react-router-dom';

const Cart = () =>
{
    const allStorage = () =>
    {

        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while (i--)
        {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
    
        return values;
    }
    const localItems = allStorage();
    // eslint-disable-next-line array-callback-return
    const cartItems = localItems.filter((res) =>
    {
        if (res.quantity !== '0')
        {
            return res;
        }
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
                                        <h3>QUANTITY: {res.quantity}</h3>
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