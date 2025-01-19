'use client'

import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function Page() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handlingClick = () => {
        if (username === "admin" && password === "admin") {
            localStorage.setItem("role", "admin")
            localStorage.setItem("username", "admin")
            redirect('/')
        } 

        if (username === 'kasir' && password === 'kasir') {
            localStorage.setItem("role", "kasir")
            localStorage.setItem("username", "kasir")
            redirect('/')
        }
    }


    return (
        <div className="h-[100vh] flex flex-col items-center justify-center w-full">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                <h1 className="text-black font-bold">Login</h1>
                <div className="flex justify-center items-center">
                    <Image src={process.env.NEXT_PUBLIC_BACKEND_URL + "/public/gambar/3697345.jpg"} alt=""  width={200} height={200} />
                    <div>
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" className="border border-gray-300 rounded-lg p-2 w-full text-black" />
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="border border-gray-300 rounded-lg p-2 w-full mt-2 text-black" />
                        <button onClick={handlingClick} className="bg-blue-500 text-white rounded-lg p-2 w-full mt-2">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}