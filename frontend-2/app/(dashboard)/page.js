'use client'

import { useEffect } from "react";
import ProductProvider from "./_components/product/product-provider";
import { redirect } from "next/navigation";

export default function Home() {

    useEffect(() => {
        if (localStorage.getItem('username') === null) {
            redirect('/login')
        }
    }, [])

    return (
        <div className="w-[85%] flex">
            <div className="min-w-[55%] overflow-y-scroll box-content no-scrollbar">
                <ProductProvider/>
            </div>
        </div>
    );
}
