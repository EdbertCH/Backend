// frontend/app/ProductsPage.tsx

import React, { useEffect, useState } from 'react';
import ProductCard from './product-card';

interface Product {
    id: number;
    nama: string;
    harga: number;
    image: string;
    categori_id: number;
}

interface Category {
    id: number;
    name: string;
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    // Fetch products and categories on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsResponse = await fetch('http://localhost:3000/api/products');
                const productsData = await productsResponse.json();
                setProducts(productsData);

                const categoriesResponse = await fetch('http://localhost:3000/api/categories');
                const categoriesData = await categoriesResponse.json();
                setCategories(categoriesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

    // Map category ID to category name
    const getCategoryName = (categoryId: number) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown';
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    name= {product.nama}
                    price={product.harga}
                    image={product.image}
                    categoryName={getCategoryName(product.categori_id)}
                />
            ))}
        </div>
    );
};

export default ProductsPage;
