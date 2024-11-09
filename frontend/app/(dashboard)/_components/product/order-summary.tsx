// frontend/app/_components/order-summary.tsx

import Image from "next/image";
import React, { FC, useState } from "react";
import { useProductProvider } from "./product-provider";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LiaCcVisa } from "react-icons/lia";
import { LiaQrcodeSolid } from "react-icons/lia";
import { Product } from "../../../../model/Product";
import Swal from 'sweetalert2'


interface CartItem {
    id: number;
    nama: string;
    harga: number;
    image: string;
    quantity: number;
}

interface OrderSummaryProps {
    cartItems: CartItem[];
}

const OrderSummary: FC<OrderSummaryProps> = ({ cartItems = [] }) => {
    const total = cartItems.reduce((sum, item) => sum + item.harga * item.quantity, 0);
    const { setChooseProduct, chooseProduct, setNextOrder } = useProductProvider()
    const [selectedOption, setSelectedOption] = useState("");


    
    const getTotal = () => {
        const total = chooseProduct?.reduce(
            (prev: number, next: Product) => {
                const total: number = next.count * next.harga
                return prev + total
            }, 0
        )
        return total
    }



    const onClickHandler = () => {
        if (chooseProduct?.length == 0){
            Swal.fire({
                icon: 'warning',
                text: 'Kamu belum input product'
            })
            return
        }
        Swal.fire({
            title: 'Buat Orderan Atas nama',
            input: "text",
            showCancelButton: true,
            preConfirm: async (data) => {
                const paylaod = {
                    products: chooseProduct?.map(data => {
                        return {
                            id: data.id,
                            qty: data.count
                        }
                    }),
                    payment_type: selectedOption,
                    customer_name: data
                }

                fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(paylaod)

                })
                    .then(res => res.json())
                    .then(res => {
                        setChooseProduct([])
                        setNextOrder(prev => prev + 1)
                    })
            }
        })
    }


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };



    return (
        <div className="bg-white right-0 bottom-0 h-[100vh] w-[30%] p-5 shadow-lg">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Cart</h1>
            </div>

            <div className="mt-5 gap-4 flex flex-col h-[35vh] overflow-y-scroll">
                {chooseProduct?.map((item) => (
                    <div key={item.id} className="border-2 rounded-md p-2 flex">
                        <Image alt={item.nama} width="100" height="100" className="rounded-md object-cover w-[10vh] h-[10vh]" src={process.env.NEXT_PUBLIC_BACKEND_URL + item?.image} />
                        <div className="ml-5 w-[100%]">
                            <h1 className="text-lg text-gray-800 font-bold capitalize">{item.nama}</h1>
                            <div className="flex justify-between w-[100%]">
                                <span className="text-[14px] font-bold text-[#00932c]">${item.harga?.toFixed(2)} <span className="text-gray-600">{item.count}X</span></span>
                                <span className="text-[14px] font-bold text-[#00932c]">${(item.harga * item.count)?.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {
                    chooseProduct?.length === 0 && (
                        <div className="flex justify-center items-center h-[100%]">
                            <h1 className="text-gray-800 font-bold">Masukan Orderan</h1>
                        </div>
                    )
                }
            </div>

            <div className="bg-[#F7F7F7] p-5 mt-5">
                <div className="flex justify-between">
                    <span className="text-gray-800 text-sm">Sub Total</span>
                    <span className="text-gray-800 text-sm">${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-4 border-t-2 pt-2">
                    <span className="text-gray-800 font-bold">Total Keseluruhan</span>
                    <span className="text-gray-800 font-bold">${getTotal().toFixed(2)}</span>
                </div>
            </div>

            <div className="flex justify-between mt-5">
                <label className="flex items-center cursor-pointer space-x-2 flex-col">
                    <input 
                        type="radio" 
                        name="option" 
                        value="1" 
                        className="hidden peer" 
                        checked={selectedOption === "1"}
                        onChange={handleOptionChange}
                    />
                    <div className="w-5 h-5 border border-gray-300 peer-checked:bg-green-500 p-8 grid place-content-center rounded-lg transition-colors">
                        <LiaMoneyBillWaveSolid color="black" size={30} />
                    </div>                    
                    <span className="text-gray-700 text-sm">Cash</span>
                </label>

                <label className="flex items-center cursor-pointer space-x-2 flex-col">
                    <input 
                        type="radio" 
                        name="option" 
                        value="2" 
                        className="hidden peer" 
                        checked={selectedOption === "2"}
                        onChange={handleOptionChange}
                    />
                    <div className="w-5 h-5 border border-gray-300 peer-checked:bg-green-500 p-8 grid place-content-center rounded-lg transition-colors">
                        <LiaCcVisa color="black" size={30} />
                    </div>
                    <span className="text-gray-700 text-sm">Debit / Credit</span>
                </label>
                
                <label className="flex items-center cursor-pointer space-x-2 flex-col">
                    <input 
                        type="radio" 
                        name="option" 
                        value="3" 
                        className="hidden peer" 
                        checked={selectedOption === "3"}
                        onChange={handleOptionChange}
                    />
                    <div className="w-5 h-5 border border-gray-300 peer-checked:bg-green-500 p-8 grid place-content-center rounded-lg transition-colors">
                        <LiaQrcodeSolid color="black" size={30} />
                    </div>
                    <span className="text-gray-700 text-sm">QR Code</span>
                </label>
            </div>

            <button onClick={onClickHandler} className="bg-[#00932c] p-2 rounded-lg w-[100%] mt-3">Order</button>
        </div>
    );
};

export default OrderSummary;
