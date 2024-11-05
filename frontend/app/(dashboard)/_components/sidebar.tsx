import React from "react";
import { FC } from "react";
import { LiaBuromobelexperte } from "react-icons/lia";

const Sidebar: FC = () => {
    return (
        <div className="bg-white h-[100vh] w-[15%] shadow-lg">
            <div className="text-gray-900 font-bold text-center py-10">
                Resto Mantap
            </div>

            <div className="flex flex-col gap-4">
                <div className="px-5">
                    <div className="font-bold text-center bg-[#00932c] text-white items-center flex py-3 rounded-3xl px-3">
                        <LiaBuromobelexperte />
                        <a href="" className="ml-5">Menu</a>
                    </div>
                </div>

                <div className="px-5">
                    <div className="font-bold text-center text-white items-center flex py-3 rounded-3xl px-3">
                        <LiaBuromobelexperte color="#00932c" />
                        <a href="" className="ml-5 text-black">Riwayat Orderan</a>
                    </div>
                </div>

                <div className="px-5">
                    <div className="font-bold text-center text-white items-center flex py-3 rounded-3xl px-3">
                        <LiaBuromobelexperte color="#00932c" />
                        <a href="" className="ml-5 text-black">Pengaturan</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar