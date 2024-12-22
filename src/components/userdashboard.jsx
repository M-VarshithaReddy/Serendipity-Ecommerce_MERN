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
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Earrings", "Rings", "Chains", "Bracelets", "Anklets"];

    const products = [
        { 
            name: "Pink Flower Earrings", 
            price: "₹150", 
            discountedPrice: "₹120", 
            discount: 20, 
            image: earringsImage, 
            category: "Earrings"
        },
        { 
            name: "Infinite Stone Ring", 
            price: "₹500", 
            discountedPrice: "₹400", 
            discount: 20, 
            image: ringImage, 
            category: "Rings"
        },
        { 
            name: "White Layered Chain", 
            price: "₹120", 
            discountedPrice: "₹100", 
            discount: 15, 
            image: necklaceImage, 
            category: "Chains" 
        },
        { 
            name: "Flower Chain", 
            price: "₹800", 
            discountedPrice: "₹750", 
            discount: 10, 
            image: chainImage, 
            category: "Chains" 
        },
        { 
            name: "White Flower Bracelet", 
            price: "₹900", 
            discountedPrice: "₹850", 
            discount: 5, 
            image: braceletImage, 
            category: "Bracelets" 
        },
        { 
            name: "Bow Earrings", 
            price: "₹200", 
            discountedPrice: "₹180", 
            discount: 10, 
            image: pearlEarringImage, 
            category: "Earrings" 
        },
        { 
            name: "Pearl Ring", 
            price: "₹600", 
            discountedPrice: "₹500", 
            discount: 15, 
            image: emeraldRingImage, 
            category: "Rings" 
        },
        { 
            name: "Drop Chain", 
            price: "₹750", 
            discountedPrice: "₹700", 
            discount: 7, 
            image: pendantImage, 
            category: "Chains" 
        },
    ];

    // Filter products by search query and category
    const filteredProducts = products.filter((product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            {/* Header Banner */}
            <div className="header-banner">
                <p>Offer Now: Exclusive Discounts Available!</p>
            </div>

            {/* Top Banner with Logo, Search Bar, and Icons */}
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

            {/* Categories Section */}
            <div className="categories-section">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`category-badge ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            {/* Products Section */}
            <div className="products-section">
                {filteredProducts.map((product, index) => (
                    <div key={index} className="product-card">
                        {/* Sale Banner */}
                        {product.discount && <div className="sale-banner">Sale</div>}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                        />
                        <div className="product-details">
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">
                                {/* If there's a discounted price, show it */}
                                {product.discountedPrice ? (
                                    <span className="original-price">{product.price}</span>
                                ) : null}
                                <span className="discounted-price">{product.discountedPrice || product.price}</span>
                            </p>
                            {product.discount && <p className="discount">-{product.discount}% OFF</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;
