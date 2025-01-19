'use client'

import Link from "next/link";
import React, { FC } from "react";
import { redirect, usePathname } from "next/navigation";
import { LiaBuromobelexperte } from "react-icons/lia";

const Sidebar: FC = () => {
    const currentRoute = usePathname();

    return (
        <div className="bg-white h-[100vh] w-[15%] shadow-lg">
            <div className="text-gray-900 font-bold text-center py-10">
                Resto Butter
            </div>

            <div className="flex flex-col gap-4">
                <div className="px-5">
                    <div
                        className={`font-bold text-center items-center flex py-3 rounded-3xl px-3 ${
                            currentRoute === "/" ? "bg-[#00932c] text-white" : "text-black"
                        }`}
                    >
                        <LiaBuromobelexperte color={currentRoute === "/" ? "white" : "#00932c"} />
                        <Link href="/" className="ml-5">Menu</Link>
                    </div>
                </div>

                <div className="px-5">
                    <div
                        className={`font-bold text-center items-center flex py-3 rounded-3xl px-3 ${
                            currentRoute === "/riwayat-order" ? "bg-[#00932c] text-white" : "text-black"
                        }`}
                    >
                        <LiaBuromobelexperte color={currentRoute === "/riwayat-order" ? "white" : "#00932c"} />
                        <Link href="/riwayat-order" className="ml-5 text-left">Riwayat Orderan</Link>
                    </div>
                </div>

                {
                    localStorage.getItem("role") === "admin" && (
                        <div className="px-5">
                            <div
                                className={`font-bold text-center items-center flex py-3 rounded-3xl px-3 ${
                                    currentRoute === "/tambah-barang" ? "bg-[#00932c] text-white" : "text-black"
                                }`}
                            >
                                <LiaBuromobelexperte color={currentRoute === "/tambah-barang" ? "white" : "#00932c"} />
                                <Link href="/tambah-barang" className="ml-5 text-left">Tambah Barang</Link>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="text-gray-900 font-bold text-center py-10 cursor-pointer text-red-500" onClick={() => {
                localStorage.clear()
                redirect('/login')
            }}>
                <span className="cursor-pointer">Logout</span>
            </div>
        </div>
    );
};

export default Sidebar;
