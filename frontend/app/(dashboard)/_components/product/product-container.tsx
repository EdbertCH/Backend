import { FC, useEffect, useState } from "react";
import { Product } from "../../../../model/Product";
import ProductCard from "./product-card";
import { useProductProvider } from "./product-provider";

const ProductContainer: FC = () => {
    const [products, setProducts] = useState<Product[]>()
    const [cacheProduct, setCacheProduct] = useState<Product[]>()
    const { setChooseProduct, chooseProduct, filterCategory, filterName } = useProductProvider()


    useEffect(() => {
        if (filterName) {
            const data = cacheProduct?.filter(
                data => {
                    return data.nama.toLowerCase().includes(filterName)
                }
            )
            setProducts(data)
            const cacheData = chooseProduct
            setChooseProduct([])
            setTimeout(() => {
                setChooseProduct(cacheData)
            }, 100)
        } else {
            setProducts(cacheProduct)
        }
    }, [filterName])


    useEffect(() => {
        let queryParams = ''

        if (filterCategory) {
            queryParams = 'categori_id=' + filterCategory
        }

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/product?' + queryParams)
            .then(res => res.json())
            .then(res => {
                setCacheProduct(res.data)
                setProducts(res.data)
                setChooseProduct([])
                setTimeout(() => {
                    const cacheData = chooseProduct
                    setChooseProduct(cacheData)
                }, 100)
            })
            .catch(console.error);
    }, [filterCategory]);



    const onAddToChartHandler = (product: Product,  count: number) => {
        let data = chooseProduct?.filter(
            data => {
                return product.id == data.id
            }
        )
        if (data.length == 1) {
            data[0].count = count
            const cacheData = chooseProduct
            setChooseProduct([])
            setTimeout(() => {
                setChooseProduct(cacheData)
            }, 50)
        } else {
            setChooseProduct(prev => [...prev, {
                ...product,
                count: count
            }])
        }
    }


    const onRemoveFromCartHandler = (product: Product, count: number) => {
        let data = chooseProduct?.filter(
            data => {
                return product.id == data.id
            }
        )

        if (count == 0) {
            data = chooseProduct?.filter(
                data => {
                    return product.id != data.id
                }
            )
            setChooseProduct(prev => data)
            return
        }

        if (data.length == 1) {
            data[0].count = count
            const cacheData = chooseProduct
            setChooseProduct([])
            setTimeout(() => {
                setChooseProduct(cacheData)
            }, 50)
        } else {
            setChooseProduct(prev => [...prev, {
                ...product,
                count: count
            }])
        }
    }



    return (
        <div className="grid grid-cols-3 px-10 gap-10">
            {
                products?.map(
                    (data, idx) => {
                        return (
                            <ProductCard 
                              onAddToCart={(count) => onAddToChartHandler(data, count)} 
                              onRemoveFromCart={(count) => onRemoveFromCartHandler(data, count)}  
                              categoryName={""} 
                              product={data} 
                              key={data.nama} />
                        )
                    }
                )
            }
        </div>
    )
}


export default ProductContainer