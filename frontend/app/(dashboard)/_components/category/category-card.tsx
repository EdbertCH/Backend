import React from "react";
import { FC } from "react";



interface CategoryCardProps {
    icon: React.ReactNode
    title: string
    count: number,
    onClick: Function
    active: boolean
}



const CategoryCard: FC<CategoryCardProps> = ({ count, icon, title, onClick, active = false }) => {
    return (
        <div onClick={onClick as any} className={`${active ? 'bg-[#00932c]' : 'bg-white'} cursor-pointer rounded-lg flex flex-col justify-between shadow-lg min-w-[15vh] h-[18vh] p-5`}>
            {icon}

            <div>
                <h1 className={`font-bold text-sm ${ active ? 'text-white' : 'text-gray-800'}`}>{title}</h1>
                <h3 className={`${ active ? 'text-white' : 'text-[#A3A3A3]' } text-[10px]`}>{count} Item</h3>
            </div>
        </div>
    )
}


export default CategoryCard