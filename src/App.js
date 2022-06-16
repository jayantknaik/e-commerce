import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/product-list/product-list.component';
import Home from './routes/home/home.component';
import Description from './components/description/description.component';
import Cart from './components/cart/cart.component';
import Success from './components/success/success.component';
import HomePage from './components/homepage/homePage.component';
import Account from './components/account/account.component';


const App = () =>
{
  const productData = [
    {
      id: '1',
      name: 'iPhone SE (3rd generation)',
      price: '41900',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu pellentesque lectus. Morbi tempus varius dolor, quis aliquet dolor bibendum blandit. ',
      image: '../../pictures/SE.jpg',
      quantity: '0'
    },
    {
      id: '2',
      name: 'iPhone XR',
      price: '42999',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu pellentesque lectus. Morbi tempus varius dolor, quis aliquet dolor bibendum blandit. ',
      image: '../../pictures/XR.png',
      quantity: '0'
    },
    {
      id: '3',
      name: 'iPhone 11',
      price: '45900',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu pellentesque lectus. Morbi tempus varius dolor, quis aliquet dolor bibendum blandit. ',
      image: '../../pictures/11.jpg',
      quantity: '0'
    },
    {
      id: '4',
      name: 'iPhone 12',
      price: '59900',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu pellentesque lectus. Morbi tempus varius dolor, quis aliquet dolor bibendum blandit. ',
      image: '../../pictures/12.jpg',
      quantity: '0'
    },
    {
      id: '5',
      name: 'iPhone 13',
      price: '74900',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu pellentesque lectus. Morbi tempus varius dolor, quis aliquet dolor bibendum blandit. ',
      image: '../../pictures/13.jpg',
      quantity: '0'
    },
    {
      id: '6',
      name: 'iPhone 13 Pro',
      price: '119900',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu pellentesque lectus. Morbi tempus varius dolor, quis aliquet dolor bibendum blandit. ',
      image: '../../pictures/13Pro.jpg',
      quantity: '0'
    },
  ];


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='product-list' element={<ProductList data={productData} />} />
          {
            productData.map((res) =>
            {
              return (
                <Route path={`/description/${res.id}`} element={<Description data={res} />} />
              )
              
            })
          }
          <Route path='/cart' element={<Cart data={productData}/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;