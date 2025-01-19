// frontend/app/_components/product-card.tsx

'use client';

import Image from 'next/image';
import React, { useState, FC, useEffect } from 'react';
import Conditional from '../conditional';
import { Product } from '../../../../model/Product';
import { useProductProvider } from './product-provider';

interface ProductCardProps {
    product: Product
    categoryName: string;
    onAddToCart: (count: number) => void;
    onRemoveFromCart: (count: number) => void;
}



const ProductCard: FC<ProductCardProps> = ({ product, categoryName, onAddToCart, onRemoveFromCart }) => {
    const [count, setCount] = useState<number>(0);
    const { chooseProduct, nextOrder } = useProductProvider()


    useEffect(() => {
        const data = chooseProduct.filter(
            data => data.nama == product.nama
        )

        if (data?.length == 1) {
            setCount(data[0].count)
        }
    }, [chooseProduct])


    useEffect(() => {
        setCount(0)
    }, [nextOrder])



    const increment = () => {
        onAddToCart(count + 1);
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        if (count > 0) {
            onRemoveFromCart(count - 1);
            setCount(prev => prev - 1);
        }
    };

    return (
        // border-[#00932c]
        <div className={`rounded-2xl bg-white p-5 shadow-md flex flex-col justify-between border-2 ${ count > 0 && "border-[#00932c]" }`}>
            <div>
                {product?.image ? (
                    <Image alt="product-image" width="200" height="100" className="rounded-md object-cover w-[200px] h-[100px]" src={process.env.NEXT_PUBLIC_BACKEND_URL + product?.image} />
                ) : (
                    <div className="rounded-md bg-gray-200 w-full h-20 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">No Image Available</span>
                    </div>
                )}
                <h3 className="text-gray-800 font-bold text-sm mt-3 capitalize">{product?.nama}</h3>
                <div className="flex justify-between">
                <span className="text-[#00932c] font-bold text-xs">${(product?.harga || 0).toFixed(2)}</span>
                    <span className="text-gray-600 text-xs capitalize">{categoryName}</span>
                </div>
            </div>

            <Conditional
                conditional={count > 0}
                onTrue={
                    <div className="flex justify-between items-center bg-[#EAEDEA] mt-5 py-2 rounded-md px-4">
                        <button onClick={decrement} className="bg-[#00932c] rounded-full w-[20px] h-[20px] font-bold">-</button>
                        <span className="text-gray-800 font-bold text-sm">{count}</span>
                        <button onClick={increment} className="bg-[#00932c] rounded-full w-[20px] h-[20px] font-bold">+</button>
                    </div>
                }
                onFalse={
                    <button onClick={increment} className="bg-[#CCE9D5] text-gray-800 font-bold w-[100%] mt-5 py-2 rounded-md text-sm">Add to Cart</button>
                }
            />
        </div>
    );
};

export default ProductCard;
