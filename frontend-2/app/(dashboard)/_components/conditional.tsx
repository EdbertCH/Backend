import React, { FC } from "react";

interface CondionalProps {
    conditional: boolean
    onTrue: React.ReactNode
    onFalse: React.ReactNode | null | undefined
}



const Condional: FC<CondionalProps> = ({ conditional, onFalse, onTrue }) => {
    if (conditional) return onTrue
    return onFalse
}


export default Condional