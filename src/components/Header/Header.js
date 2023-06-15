import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <img className='img-logo' src={logo} alt="" />
            <nav className='menu'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
            </nav>
        </div>
    );
};

export default Header;