import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { name, price, img, seller } = props.product;
    
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="">
                <h4 className="product-name">{name}</h4>
                <br />
                <small>By: {seller}</small>
                <p>Price ${price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;