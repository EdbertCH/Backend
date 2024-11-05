import CategoryCard from "./_components/category-card";
import OrderSummary from "./_components/order-summary";
import ProductCard from "./_components/product-card";
import { LiaGripVerticalSolid } from "react-icons/lia";
import { LiaGulp } from "react-icons/lia";
import { LiaHamburgerSolid } from "react-icons/lia";
import { LiaLemon } from "react-icons/lia";
import { LiaSearchSolid } from "react-icons/lia";

export default function Home() {
    return (
        <div className="w-[85%] flex">
            <div className="min-w-[55%] overflow-y-scroll box-content no-scrollbar">
                <div className="mx-10 bg-white w-[90%] mt-3 rounded-lg h-[6vh] flex items-center px-5">
                    <LiaSearchSolid color="black" className="mr-4" />
                    <input className="w-[100%] focus:outline-none text-black" placeholder="Cari produk..."  />
                </div>
                <div className="flex overflow-x-auto gap-10 px-10 no-scrollbar py-5">
                    <CategoryCard
                        count={20}
                        icon={<LiaGripVerticalSolid color="black" size={20} className="-ml-1" />}
                        title="Semua"
                    />
                    <CategoryCard
                        count={20}
                        icon={<LiaGulp color="black" size={20} className="-ml-1" />}
                        title="Minuman"
                    />
                    <CategoryCard
                        count={20}
                        icon={<LiaHamburgerSolid color="black" size={20} className="-ml-1" />}
                        title="Cepat Saji"
                    />
                    <CategoryCard
                        count={20}
                        icon={<LiaLemon color="black" size={20} className="-ml-1" />}
                        title="Buah"
                    />
                </div>
                <div className="grid grid-cols-3 px-10 gap-10">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <OrderSummary />
        </div>
    );
}
