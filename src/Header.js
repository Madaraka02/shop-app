import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className="header">
            <div className="header__left">
                <Link to="/">  <img className="header__logo" src="" alt="jays logo"/></Link>
            </div>
                <Link to="/" className="header__link">Male shoes & clothes</Link>
                <Link to="/" className="header__link">FeMale shoes & clothes</Link>
                <Link to="/" className="header__link">Kids shoes & clothes</Link>
            <div className="header__input">
                <input type="text" placeholder="what are you looking for"/>
                <SearchIcon className="header__inputButton"/>
            </div>
            <div className="header__right">
                <ShoppingCartIcon/>
                <span>0</span>
            </div>
        </nav>
    )
}

export default Header
