import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/Man">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
