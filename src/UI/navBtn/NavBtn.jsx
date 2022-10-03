import React from "react";
import cl from './NavBtn.module.scss';

const NavBtn = ({children, ...props}) => {
    return (
        <button className={props.tab === props.changeTab ? cl.changeBtn : cl.btn} {...props}>
            {children}
        </button>
    )
}

export default NavBtn