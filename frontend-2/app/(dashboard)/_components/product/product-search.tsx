import { FC, useState, useEffect } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { useProductProvider } from "./product-provider";

const ProductSearch: FC = () => {
    const { setFilterName } = useProductProvider();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setFilterName(searchTerm);
        }, 500); 

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, setFilterName]);

    return (
        <div className="mx-10 bg-white w-[90%] mt-3 rounded-lg h-[6vh] flex items-center px-5">
            <LiaSearchSolid color="black" className="mr-4" />
            <input
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                className="w-[100%] focus:outline-none text-black"
                placeholder="Cari produk..."
            />
        </div>
    );
};

export default ProductSearch;
