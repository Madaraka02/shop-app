import React from 'react';
import './Productstore.css';
import {Link} from "react-router-dom";

function Productstore({title, image, price,}) {
    return (
        <div className="productstore__info">
            <img className="productstore__image" src={image} alt=""/>
            <p className="productstore__title">{title}</p>
            <p className="productstore__price">
                <small>Ksh</small>
                <strong>{price}</strong>
            </p>
            <Link to={"https://wa.link/tekxzc"}>
            <button className="productstore__button">Add to cart</button>
            </Link>
            
        </div>
    )
}

export default Productstore
