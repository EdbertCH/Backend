// frontend/app/_components/product-card.tsx

'use client';

import Image from 'next/image';
import React, { useState, FC } from 'react';
import Conditional from './conditional';

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
    categoryName: string;
}

const ProductCard: FC<ProductCardProps> = ({ name, price, image, categoryName }) => {
    const [active, setActive] = useState<boolean>(false);
    const [count, setCount] = useState<number>(1);

    const onButtonPressHandler = () => {
        setActive(true);
    };

    const setCountHandler = (type: 'inc' | 'dec') => {
        if (type == 'dec' && count > 1) setCount((prev) => prev - 1);
        if (type == 'inc') setCount((prev) => prev + 1);
    };

    return (
        <div className={`rounded-2xl bg-white p-5 shadow-md flex flex-col justify-between ${active && 'border-2 border-[#00932c]'}`}>
            <div>
                {image ? (
                    <Image alt="product-image" width="200" height="100" className="rounded-md object-cover" src={image} />
                ) : (
                    <div className="rounded-md bg-gray-200 w-full h-20 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">No Image Available</span>
                    </div>
                )}
                <h3 className="text-gray-800 font-bold text-sm mt-3">{name}</h3>
                <div className="flex justify-between">
                    <span className="text-[#00932c] font-bold text-xs">${price ? price.toLocaleString() : '0.00'}</span>
                    <span className="text-gray-600 text-xs">{categoryName}</span>
                </div>
            </div>

            <Conditional
                conditional={active}
                onTrue={
                    <div className="flex justify-between items-center bg-[#EAEDEA] mt-5 py-2 rounded-md px-4">
                        <button onClick={() => setCountHandler('dec')} className="bg-[#00932c] rounded-full w-[20px] h-[20px] font-bold">-</button>
                        <span className="text-gray-800 font-bold text-sm">{count}</span>
                        <button onClick={() => setCountHandler('inc')} className="bg-[#00932c] rounded-full w-[20px] h-[20px] font-bold">+</button>
                    </div>
                }
                onFalse={
                    <button onClick={onButtonPressHandler} className="bg-[#CCE9D5] text-gray-800 font-bold w-[100%] mt-5 py-2 rounded-md text-sm">Tambah ke Orderan</button>
                }
            />
        </div>
    );
};

export default ProductCard;
