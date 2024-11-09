'use client'

import { FC, useEffect, useState } from "react";
import { Order } from "../../../../model/Order";
import Image from "next/image";

const OrderContainer: FC = () => {
    const [order, setOrder] = useState<Order[]>([])

    useEffect(() => {
      let queryParams = ''

      fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/order')
          .then(res => res.json())
          .then(res => {
              setOrder(res.data)
          })
          .catch(console.error);
    }, [order]);



    const getTotal = (order: Order) => {
        return order?.products.reduce(
            (prev, next) => {
                return prev + (next.qty * next.product.harga)
            }, 0
        ).toFixed(2)
    }


    return (
        <div className="grid grid-cols-4 gap-10">
            {
                order?.toReversed().map(
                    (data, idx) => {
                        return (
                            <div key={idx} className="bg-white rounded-lg shadow-md pb-4">
                                <div className="h-[20px] mb-3 bg-green-700 flex items-center justify-center">
                                    <span className="text-sm">{data.created_at}</span>
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
                                                    <div className="flex flex-row justify-between">
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