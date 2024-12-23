"use client"

import React, { FC, useState, useEffect, Suspense } from "react";
import CategoryCard from "./category-card";
import { Category } from "../../../../model/Category";
import { useProductProvider } from "../product/product-provider";
import { LuTally4 } from "react-icons/lu";

const ICONS = {
    dessert: React.lazy(() => import('react-icons/lia').then(module => ({ default: module.LiaHamburgerSolid }))),
    drink: React.lazy(() => import('react-icons/lia').then(module => ({ default: module.LiaWaterSolid }))),
    "main course":  React.lazy(() => import('react-icons/lia').then(module => ({ default: module.LiaPizzaSliceSolid }))),
    snack: React.lazy(() => import('react-icons/lia').then(module => ({ default: module.LiaMortarPestleSolid }))),
};

const CategoryContainer: FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const { setFilterCategory, filterCategory } = useProductProvider()

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/category?show-count-product=true')
            .then(res => res.json())
            .then(res => {
                console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
                setCategories(res.data)
            })
            .catch(console.error);
    }, []);

    const onClickHandler = (id: number) => {
        setFilterCategory(id)
    }

    return (
        <div className="flex overflow-x-auto gap-10 px-10 no-scrollbar py-5">
            <div className="flex flex-row gap-10">
            <CategoryCard active={ filterCategory == 0} onClick={() => onClickHandler(0)} count={'-'} icon={<LuTally4 color={ 0 == filterCategory ? 'white' : 'gray'} />} title={'Semua'} />
                {categories?.map((data, idx) => {
                    const IconComponent = ICONS[data.name];
                    return (
                        <Suspense key={idx} fallback={<div>Loading...</div>}>
                            {IconComponent && (
                                <CategoryCard active={data.id == filterCategory} onClick={() => onClickHandler(data.id)} count={data.count} icon={<IconComponent color={ data.id == filterCategory ? 'white' : 'gray'} />} title={data.name} />
                            )}
                        </Suspense>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryContainer;
