import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import all_product from '../components/assets/all_product';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import BreadCrums from '../components/BreadCrums/BreadCrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
    const { addToCart } = useContext(ShopContext);
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // First check if it's a local product (numeric ID)
                const localProduct = all_product.find(p => p.id.toString() === productId);
                
                if (localProduct) {
                    setProduct(localProduct);
                    setLoading(false);
                    return;
                }

                // If not local, fetch from database
                const response = await axios.get(`https://backend-crickart.onrender.com/api/products/${productId}`);
                const dbProduct = response.data;
                
                // Transform database product to match local product structure
                const transformedProduct = {
                    id: dbProduct._id,
                    name: dbProduct.name,
                    category: dbProduct.category,
                    image: `https://backend-crickart.onrender.com/${dbProduct.image}`,
                    new_price: dbProduct.new_price,
                    old_price: dbProduct.old_price
                };
                
                setProduct(transformedProduct);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Error loading product');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <div className="loading">Loading product...</div>;
    if (error) return <div className="error-message">{error}</div>;
    if (!product) return <div className="error-message">Product not found</div>;

    return (
        <div className='product'>
            <BreadCrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox product={product} />
            <RelatedProducts product={product} />
        </div>
    );
};

export default Product;
