'use client'

import { createContext, FC, useContext, useState } from "react";
import { Product } from "../../../../model/Product";
import ProductContainer from "./product-container";
import CategoryContainer from "../category/category-container";
import OrderSummary from "./order-summary";
import ProductSearch from "./product-search";



interface ProductContextProps {
    chooseProduct: Product[],
    setChooseProduct: Function
    filterCategory: number
    setFilterCategory: Function
    filterName: string
    setFilterName: Function
    nextOrder: number,
    setNextOrder: Function
}


const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useProductProvider = () => useContext(ProductContext)

const ProductProvider: FC = () => {
    const [chooseProduct, setChooseProduct] = useState<Product[]>([])
    const [filterCategory, setFilterCategory] = useState<number>(0)
    const [filterName, setFilterName] = useState()
    const [nextOrder, setNextOrder] = useState(0)


    return (
        <ProductContext.Provider value={{ chooseProduct, filterCategory, setChooseProduct, setFilterCategory, filterName, setFilterName, nextOrder, setNextOrder }}>
            <div className="flex flex-row w-100">
                <div className="h-[100vh] overflow-y-scroll">
                    <ProductSearch />
                    <CategoryContainer />
                    <ProductContainer />
                </div>
                <OrderSummary cartItems={[]} />
            </div>
        </ProductContext.Provider>
    )
}


export default ProductProvider