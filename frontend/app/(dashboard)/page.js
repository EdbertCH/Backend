import ProductProvider from "./_components/product/product-provider";

export default async function Home() {

    return (
        <div className="w-[85%] flex">
            <div className="min-w-[55%] overflow-y-scroll box-content no-scrollbar">
                <ProductProvider/>
            </div>
        </div>
    );
}
