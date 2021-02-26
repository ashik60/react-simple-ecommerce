import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    let shippingCost = totalPrice === 0 ? 0.00 : 9.99;

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Products Price: {totalPrice.toFixed(2)}</p>
            <p>Shipping Cost: {shippingCost.toFixed(2)} </p>
            <p>Total Price: {(shippingCost + totalPrice).toFixed(2)}</p>
        </div>
    );
};

export default Cart;
