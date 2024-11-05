'use client'

import Image from "next/image";
import React, { useState } from "react";
import { FC } from "react";
import Condional from "./conditional";

const ProductCard: FC = () => {
    const [active, setActive] = useState<boolean>(false)
    const [count, setCount] = useState<number>(1)


    const onButtonPressHandler = () => {
        setActive(true)
    }

    

    const setCountHandler = (type: 'inc' | 'dec') => {
        if (type == 'dec' && count > 1) setCount(prev => prev - 1)
        if (type == 'inc') setCount(prev => prev + 1)
    }



    return (
        <div className={`rounded-2xl bg-white p-5 shadow-md flex flex-col justify-between ${active && 'border-2 border-[#00932c]'}`}>
            <div>
                <Image alt="product-image" width="200" height="100" className="rounded-md object-cover" src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" />
                <h3 className="text-gray-800 font-bold text-sm mt-3">Burger Mantap Tenan Pedas banget</h3>
                <div className="flex justify-between">
                <span className="text-[#00932c] font-bold text-xs">Rp20.000</span>
                <span className="text-gray-600 text-xs">Street Foot</span>
                </div>
            </div>

            <Condional
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
    )
}


export default ProductCard