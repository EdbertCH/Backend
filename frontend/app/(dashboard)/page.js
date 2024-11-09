import CategoryCard from "./_components/category/category-card";
import OrderSummary from "./_components/order-summary";
import ProductCard from "./_components/product/product-card";
import { LiaSearchSolid } from "react-icons/lia";
import CategoryContainer from "./_components/category/category-container";

export default async function Home() {
    const products = await fetch(process.env.BACKEND_URL + '/api/product')
                        .then(res => res.json())
                        .then(res => res.data)

    return (
        <div className="w-[85%] flex">
            <div className="min-w-[55%] overflow-y-scroll box-content no-scrollbar">
                <div className="mx-10 bg-white w-[90%] mt-3 rounded-lg h-[6vh] flex items-center px-5">
                    <LiaSearchSolid color="black" className="mr-4" />
                    <input className="w-[100%] focus:outline-none text-black" placeholder="Cari produk..."  />
                </div>
                <div className="flex overflow-x-auto gap-10 px-10 no-scrollbar py-5">
                    <CategoryContainer />
                </div>
                <div className="grid grid-cols-3 px-10 gap-10">
                    {
                        products?.map(
                            (data, idx) => {
                                return (
                                    <ProductCard />
                                )
                            }
                        )
                    }
                </div>
            </div>
            <OrderSummary />
        </div>
    );
}
