import React, { useState } from 'react';
import "./DescriptionBox.css"

const DescriptionBox = ({ product }) => {
    const [activeTab, setActiveTab] = useState('description');

    const getProductSpecificFeatures = () => {
        switch(product?.category) {
            case 'bats':
                return [
                    'Premium grade willow for optimal performance',
                    'Perfectly balanced weight distribution',
                    'Anti-scuff protection sheet',
                    'Ergonomic handle grip for better control'
                ];
            case 'balls':
                return [
                    'Hand-stitched for durability',
                    'Perfect seam for better swing',
                    'Weather-resistant leather',
                    'Regulation weight and size'
                ];
            case 'kits':
                return [
                    'High-quality protective padding',
                    'Moisture-wicking fabric',
                    'Adjustable straps for perfect fit',
                    'Lightweight and durable construction'
                ];
            default:
                return [
                    'Premium quality materials',
                    'Professional grade construction',
                    'Durable and long-lasting',
                    'Competition ready'
                ];
        }
    };

    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div 
                    className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Product Details
                </div>
                <div 
                    className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews (122)
                </div>
            </div>
            
            {activeTab === 'description' ? (
                <div className="descriptionbox-description">
                    <div className="product-header">
                        <h2>{product?.name}</h2>
                        <div className="product-category-badge">
                            {product?.category}
                        </div>
                    </div>

                    <div className="product-highlights">
                        <div className="highlight-card">
                            <span className="highlight-icon">🏏</span>
                            <h4>Premium Quality</h4>
                            <p>Made with finest materials</p>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-icon">⚡</span>
                            <h4>Performance</h4>
                            <p>Designed for excellence</p>
                        </div>
                        <div className="highlight-card">
                            <span className="highlight-icon">🛡️</span>
                            <h4>Durability</h4>
                            <p>Built to last longer</p>
                        </div>
                    </div>
                    
                    <div className="description-features">
                        <h3>Key Features</h3>
                        <div className="features-grid">
                            {getProductSpecificFeatures().map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <span className="feature-check">✓</span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product-info-grid">
                        <div className="info-card">
                            <h4>Specifications</h4>
                            <ul>
                                <li><strong>Material:</strong> Premium Grade</li>
                                <li><strong>Weight:</strong> Standard</li>
                                <li><strong>Size:</strong> Professional</li>
                                <li><strong>Origin:</strong> India</li>
                            </ul>
                        </div>
                        <div className="info-card">
                            <h4>Care Instructions</h4>
                            <ul>
                                <li>Store in dry place</li>
                                <li>Regular maintenance</li>
                                <li>Clean after use</li>
                                <li>Avoid extreme conditions</li>
                            </ul>
                        </div>
                    </div>

                    <div className="warranty-section">
                        <div className="warranty-badge">
                            <span className="warranty-icon">✦</span>
                            1 Year Warranty
                        </div>
                        <p>
                            CrickArt ensures all products meet the highest quality standards. 
                            Each item undergoes rigorous quality checks before reaching our customers.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="descriptionbox-reviews">
                    <div className="review-stats">
                        <div className="overall-rating">
                            <h3>4.8</h3>
                            <div className="stars">★★★★★</div>
                            <p>Based on 122 reviews</p>
                        </div>
                        <div className="rating-bars">
                            <div className="rating-bar">
                                <span>5★</span>
                                <div className="bar"><div style={{width: '80%'}}></div></div>
                                <span>98</span>
                            </div>
                            <div className="rating-bar">
                                <span>4★</span>
                                <div className="bar"><div style={{width: '15%'}}></div></div>
                                <span>18</span>
                            </div>
                            <div className="rating-bar">
                                <span>3★</span>
                                <div className="bar"><div style={{width: '3%'}}></div></div>
                                <span>4</span>
                            </div>
                            <div className="rating-bar">
                                <span>2★</span>
                                <div className="bar"><div style={{width: '1%'}}></div></div>
                                <span>1</span>
                            </div>
                            <div className="rating-bar">
                                <span>1★</span>
                                <div className="bar"><div style={{width: '1%'}}></div></div>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DescriptionBox;
