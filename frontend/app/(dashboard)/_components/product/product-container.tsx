import { FC, useEffect, useState } from "react";
import { Product } from "../../../../model/Product";
import ProductCard from "./product-card";

const ProductContainer: FC = () => {
    const [products, setProducts] = useState<Product[]>()


    useEffect(() => {
      console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/category?show-count-product=true')
          .then(res => res.json())
          .then(res => {
              setProducts(res.data)
          })
          .catch(console.error);
    }, []);



    const onAddToChartHandler = (product: Product) => {
        // TODO:: 
    }


    const onRemoveFromCartHandler = (product: Product) => {
        // TODO::
    }



    return (
        <div className="grid grid-cols-3 px-10 gap-10">
            {
                products?.map(
                    (data, idx) => {
                        return (
                            <ProductCard 
                              onAddToCart={() => onAddToChartHandler(data)} 
                              onRemoveFromCart={() => onRemoveFromCartHandler(data)}  
                              categoryName={""} 
                              product={data} 
                              key={idx} />
                        )
                    }
                )
            }
        </div>
    )
}


export default ProductContainer