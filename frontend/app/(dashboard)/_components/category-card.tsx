import React from "react";
import { FC } from "react";



interface CategoryCardProps {
    icon: React.ReactNode
    title: string
    count: number
}



const CategoryCard: FC<CategoryCardProps> = ({ count, icon, title }) => {
    return (
        <div className="bg-white rounded-lg flex flex-col justify-between shadow-lg min-w-[15vh] h-[18vh] p-5">
            {icon}

            <div>
                <h1 className="font-bold text-sm text-gray-800">{title}</h1>
                <h3 className="text-[#A3A3A3] text-[10px]">{count} Item</h3>
            </div>
        </div>
    )
}


export default CategoryCard