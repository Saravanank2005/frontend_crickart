import React, { useState, useEffect } from 'react';
import './CSS/ShopCategory.css'
import axios from 'axios';
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import all_product from '../components/assets/all_product';

const ShopCategory = (props) => {
    const [dbProducts, setDbProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://backend-crickart.onrender.com/api/products');
            // Transform database products to match local product structure
            const transformedDbProducts = response.data.map(product => ({
                id: product._id,
                name: product.name,
                category: product.category,
                image: `https://backend-crickart.onrender.com/${product.image}`,
                new_price: product.new_price,
                old_price: product.old_price
            }));
            setDbProducts(transformedDbProducts);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError('Error loading products');
            setLoading(false);
        }
    };

    if (loading) return <div className="loading">Loading products...</div>;
    if (error) return <div className="error-message">{error}</div>;

    // Combine local and database products
    const allProducts = [...all_product, ...dbProducts];
    
    // Filter products by category
    const categoryProducts = allProducts.filter(item => item.category === props.category);

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing {categoryProducts.length} products</span>
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {categoryProducts.length === 0 ? (
                    <div className="no-products">No products found in this category</div>
                ) : (
                    categoryProducts.map((item) => (
                        <Item 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                )}
            </div>
            {categoryProducts.length > 0 && (
                <div className="shopcategory-loadmore">
                    Coming Soon...
                </div>
            )}
        </div>
    );
}

export default ShopCategory;
