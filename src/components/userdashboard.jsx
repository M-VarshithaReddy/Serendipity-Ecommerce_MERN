import React, { useState } from "react";
import logoImage from "../assets/Serendipity_logo.png"; 
import earringsImage from "../assets/earring_1.jpg";
import ringImage from "../assets/ring_1.jpg"; 
import necklaceImage from "../assets/chain_1.jpg";
import chainImage from "../assets/chain_3.jpg";
import braceletImage from "../assets/braclet_1.jpg";
import pearlEarringImage from "../assets/earring_2.jpg";
import emeraldRingImage from "../assets/ring_2.jpg";
import pendantImage from "../assets/chain_2.jpg";
import "./UserDashboard.css";

const UserDashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["Earrings", "Rings", "Chains", "Bracelets", "Anklets"];
    const products = [
        { name: "Pink Flower Earrings", price: "₹150", image: earringsImage },
        { name: "Infinite Stone Ring", price: "₹500", image: ringImage },
        { name: "White Layered Chain", price: "₹120", image: necklaceImage },
        { name: "Flower Chain", price: "₹800", image: chainImage },
        { name: "White Flower Bracelet", price: "₹900", image: braceletImage },
        { name: "Bow Earrings", price: "₹200", image: pearlEarringImage },
        { name: "Pearl Ring", price: "₹600", image: emeraldRingImage },
        { name: "Drop Chain", price: "₹750", image: pendantImage },
        
    ];

    
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            {/* Header Banner */}
            <div className="header-banner">
                <p>Offer Now: Exclusive Discounts Available!</p>
            </div>

            {/* Top Banner with Logo and Icons */}
            <div className="top-banner">
                <img src={logoImage} alt="Logo" className="logo-image" />
                <div className="search-bar">
                <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    
                </div>
                <div className="top-icons">
                    <span className="icon">❤️</span>
                    <span className="icon">🛒</span>
                    <span className="icon">👤</span>
                </div>
            </div>


            {/* Categories */}
            <div className="categories-section">
                {categories.map((category, index) => (
                    <div key={index} className="category-badge">
                        {category}
                    </div>
                ))}
            </div>

            {/* Products Section */}
            <div className="products-section">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-card">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <div className="product-details">
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;
