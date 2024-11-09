import ProductProvider from "./_components/product/product-provider";

export default async function Home() {
    const products = await fetch(process.env.BACKEND_URL + '/api/product')
                        .then(res => res.json())
                        .then(res => res.data)

    return (
        <div className="w-[85%] flex">
            <div className="min-w-[55%] overflow-y-scroll box-content no-scrollbar">
                <ProductProvider/>
            </div>
        </div>
    );
}
