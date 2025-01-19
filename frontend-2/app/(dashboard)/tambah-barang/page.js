'use client'

import Swal from "sweetalert2";


export default function RiwayatOrder() {

    const onSubmitHanlder = (e) => {
        e.preventDefault();
        const nama = e.target.nama.value;
        const harga = e.target.harga.value;
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/product', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nama, harga })
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: 'Berhasil',
                text: 'Data berhasil ditambahkan',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        })
        .catch(error => {
            console.error('Error:', error);
        })
        .finally(() => {
            e.target.reset();
        });
    }


    return (
        <div className="p-10 w-full overflow-y-scroll">
            <form onSubmit={onSubmitHanlder} className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nama" className="text-sm text-black">Nama</label>
                    <input type="text" id="nama" className="input text-black" placeholder="Nama" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="harga" className="text-sm text-black">Harga</label>
                    <input type="text" id="harga" className="input text-black" placeholder="Harga" />
                </div>
                <button type="submit" className="bg-[#00932c] p-2 rounded">Tambah</button>    
            </form>
        </div>
    );
}
