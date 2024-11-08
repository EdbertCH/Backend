import Image from "next/image";
import React from "react";
import { FC } from "react";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LiaCcVisa } from "react-icons/lia";
import { LiaQrcodeSolid } from "react-icons/lia";


const OrderSummary: FC = () => {
    return (
        <div className="bg-white w-[40%] p-5 shadow-lg">
            <div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Table 4</h1>
                    <span className="font-bold text-base text-gray-800">Yanto</span>
                </div>
            </div>

            <div className="mt-5 gap-4 flex flex-col h-[35vh] overflow-y-scroll">
                <div className="border-2 rounded-md p-2 flex">
                    <Image alt="product-image" width="100" height="100" className="rounded-md object-cover w-[10vh] h-[10vh]" src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" />
                    <div className="ml-5">
                        <h1 className="text-sm text-gray-800 font-bold">Burger Hantono</h1>
                        <div>
                            <span className="text-[10px] text-[#00932c]">Rp10.000 2x</span>
                            <span className="text-[10px] text-[#00932c]">Rp20.000</span>
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-md p-2 flex">
                    <Image alt="product-image" width="100" height="100" className="rounded-md object-cover w-[10vh] h-[10vh]" src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" />
                    <div className="ml-5 ">
                        <h1 className="text-sm text-gray-800 font-bold">Burger Hantono</h1>
                        <div>
                            <span className="text-[10px] text-[#00932c]">Rp10.000 2x</span>
                            <span className="text-[10px] text-[#00932c]">Rp20.000</span>
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-md p-2 flex">
                    <Image alt="product-image" width="100" height="100" className="rounded-md object-cover w-[10vh] h-[10vh]" src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" />
                    <div className="ml-5">
                        <h1 className="text-sm text-gray-800 font-bold">Burger Hantono</h1>
                        <div>
                            <span className="text-[10px] text-[#00932c]">Rp10.000 2x</span>
                            <span className="text-[10px] text-[#00932c]">Rp20.000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F7F7F7] p-5 mt-5">
                <div className="flex justify-between">
                    <span className="text-gray-800 text-sm">Sub Total</span>
                    <span className="text-gray-800 text-sm">Rp100.000</span>
                </div>
                <div className="flex justify-between border-b-2 border-dashed pb-4">
                    <span className="text-gray-800 text-sm">Sub Total</span>
                    <span className="text-gray-800 text-sm">Rp100.000</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span className="text-gray-800 font-bold">Total Keseluruhan</span>
                    <span className="text-gray-800 font-bold">Rp300.000</span>
                </div>
            </div>  


            <div className="flex justify-between mt-5">
                <label className="flex items-center cursor-pointer space-x-2 flex-col">
                    <input type="radio" name="option" className="hidden peer" />
                    <div className="w-5 h-5 border border-gray-300 peer-checked:bg-green-500 p-8 grid place-content-center rounded-lg transition-colors">
                        <LiaMoneyBillWaveSolid color="black" size={30} />
                    </div>                    
                    <span className="text-gray-700 text-sm">Cash</span>
                </label>

                <label className="flex items-center cursor-pointer space-x-2 flex-col">
                    <input type="radio" name="option" className="hidden peer" />
                    <div className="w-5 h-5 border border-gray-300 peer-checked:bg-green-500 p-8 grid place-content-center rounded-lg transition-colors">
                        <LiaCcVisa color="black" size={30} />
                    </div>
                    <span className="text-gray-700 text-sm">Debit / Credit</span>
                </label>
                
                <label className="flex items-center cursor-pointer space-x-2 flex-col">
                    <input type="radio" name="option" className="hidden peer" />
                    <div className="w-5 h-5 border border-gray-300 peer-checked:bg-green-500 p-8 grid place-content-center rounded-lg transition-colors">
                        <LiaQrcodeSolid color="black" size={30} />
                    </div>
                    <span className="text-gray-700 text-sm">QR Code</span>
                </label>
            </div>


            <button className="bg-[#00932c] p-2 rounded-lg w-[100%] mt-3">Buat Orderan</button>
        </div>
    )
}


export default OrderSummary