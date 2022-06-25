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
                            <Product key={res.id} data={res} />    
                        )
                    })
                }
        </div>
        </Fragment>
    )
}

export default ProductList;