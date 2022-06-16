import Product from '../product/product.component';
import Search from '../search-bar/search-bar.component';
import './product-list.css';
import { Fragment } from 'react';

const ProductList = (props) =>
{
    return (
        <Fragment>
        <Search />
            <div className="ProductList">
                {
                    props.data.map((res) =>
                    {
                        return (
                            <Product name={res.name} price={res.price} description={res.description} id={res.id} image={res.image} quantity={res.quantity}/>
                        )
                    })
                }
        </div>
        </Fragment>
    )
}

export default ProductList;