import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/product-list/product-list.component';
import Home from './components/home/home.component';
import Description from './components/description/description.component';
import Cart from './components/cart/cart.component';
import Success from './components/success/success.component';
import HomePage from './components/homepage/homePage.component';
import Account from './components/account/account.component';
import { productData } from './productData';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from './features/productSlice';

const App = () =>
{
  const products = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  dispatch(updateProducts(productData));

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='product-list' element={<ProductList data={products} />} />
          {
            products.map((res) =>
            {
              return (
                <Route key={res.id} path={`description/${res.id}`} element={<Description data={res} />} />
              )
              
            })
          }
          <Route path='cart' element={<Cart data={products}/>} />
          <Route path="success" element={<Success/>} />
          <Route path="home" element={<HomePage />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;