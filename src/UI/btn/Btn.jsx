import React from "react";
import cl from './Btn.module.scss';

const Btn = ({children, ...props}) => {
    return (
        <button className={cl.btn} {...props}>
            {children}
        </button>
    )
}

export default Btn