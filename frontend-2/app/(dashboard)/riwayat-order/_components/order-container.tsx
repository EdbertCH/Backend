'use client'

import { FC, useEffect, useState } from "react";
import { Order } from "../../../../model/Order";
import { LuTrash2 } from "react-icons/lu";
import Swal from "sweetalert2";

const OrderContainer: FC = () => {
    const [order, setOrder] = useState<Order[]>([])



    const fetchDataHandler = () => {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/order')
        .then(res => res.json())
        .then(res => {
            setOrder(res.data)
        })
        .catch(console.error);
    }



    useEffect(() => {
      fetchDataHandler()
    }, []);



    const getTotal = (order: Order) => {
        return order?.products.reduce(
            (prev, next) => {
                return prev + (next.qty * next.product.harga)
            }, 0
        ).toFixed(2)
    }


    const deleteHandler = (data: Order) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/order/' + data.id, {
            method: 'DELETE'
        }).then(res => {
          Swal.fire({ icon: 'success', text: 'Berhasil di hapus' })
          fetchDataHandler()
        })
    }


    return (
        <div className="grid grid-cols-4 gap-10">
            {
                order?.toReversed().map(
                    (data, idx) => {
                        return (
                            <div key={idx} className="bg-white rounded-lg shadow-md pb-4 relative">
                                <div className="h-[20px] mb-3 bg-green-700 flex items-center justify-center">
                                    <span className="text-sm">{data.created_at}</span>
                                </div>
                                <div>
                                    <div onClick={() => deleteHandler(data)} className="bg-red-700 rounded-full flex -top-3 -right-3 cursor-pointer justify-center items-center absolute w-[30px] h-[30px]">
                                        <LuTrash2 color="white" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-row px-3">
                                        <h1 className="text-gray-800 mr-3">Nama</h1>
                                        <h1 className="capitalize text-gray-800">{data.customer_name}</h1>
                                    </div>
                                    <div className="flex flex-row px-3">
                                        <h1 className="text-gray-800 mr-3">Metode Pembayaran</h1>
                                        <h1 className="capitalize text-gray-800">{data.payment_type}</h1>
                                    </div>
                                    <div className="border-b-2 border-dashed my-4"></div>
                                    <div className="flex flex-row px-3 justify-between">
                                        <h1 className="text-gray-800 mr-3">Total</h1>
                                        <h1 className="capitalize text-gray-800">${getTotal(data)}</h1>
                                    </div>
                                </div>
                                <div className="bg-gray-100 p-3">
                                    {
                                        data.products?.map(
                                            (data, idx) => {
                                                return (
                                                    <div key={data.product.id} className="flex flex-row justify-between">
                                                        <h1 className="text-gray-800">{data.product.nama}</h1>
                                                        <h1 className="text-gray-800">${(data.qty * data.product.harga).toFixed(2)}</h1>
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}


export default OrderContainer