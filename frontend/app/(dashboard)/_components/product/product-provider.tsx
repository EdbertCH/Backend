'use client'

import { createContext, FC, useState } from "react";
import { Product } from "../../../../model/Product";
import ProductContainer from "./product-container";
import CategoryContainer from "../category/category-container";
import OrderSummary from "../order-summary";



interface ProductContextProps {
    chooseProduct: Product[],
    setChooseProduct: Function
    filterCategory: number
    setFilterCategory: Function
}


const ProductContext = createContext<ProductContextProps | undefined>(undefined);



const ProductProvider: FC = () => {
    const [chooseProduct, setChooseProduct] = useState<Product[]>([])
    const [filterCategory, setFilterCategory] = useState<number>()


    return (
        <ProductContext.Provider value={{ chooseProduct, filterCategory, setChooseProduct, setFilterCategory }}>
            <CategoryContainer />
            <ProductContainer />
            <OrderSummary cartItems={[]} />
        </ProductContext.Provider>
    )
}


export default ProductProvider