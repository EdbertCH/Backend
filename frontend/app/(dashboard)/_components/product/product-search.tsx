import { FC } from "react";
import { LiaSearchSolid } from "react-icons/lia";

const ProductSearch: FC = () => {
    return (
      <div className="mx-10 bg-white w-[90%] mt-3 rounded-lg h-[6vh] flex items-center px-5">
          <LiaSearchSolid color="black" className="mr-4" />
          <input className="w-[100%] focus:outline-none text-black" placeholder="Cari produk..."  />
      </div>
    )
}


export default ProductSearch