import { Link } from 'react-router-dom';
import './navbar.css';
import { Fragment } from 'react';

const Navbar = () =>
{
    return (
        <Fragment>
            <div className="top">
                <button id="login" type="button">LOGIN</button>
                <button id="signup" type="button">CREATE ACCOUNT</button>
            </div> 
            <div className="heading">
                <Link to='/home'>
                    <button id="nav">home</button>
                </Link>
                <Link to='/product-list'>
                    <button id="nav">products</button>
                </Link>
                <h1 id="bliss">bliss.</h1>
                <Link to='account'>
                    <button id="nav">account</button>
                </Link>
                <Link to="/cart">
                    <button id="nav">cart</button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Navbar;