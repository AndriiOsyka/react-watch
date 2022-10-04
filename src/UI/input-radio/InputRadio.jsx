import React, { useEffect } from "react";
import { useState } from "react";
import cl from "./InputRadio.module.scss";

const ImputRadio = ({id, setMargin, margin, arrow}) => {
    const [back, setBack] = useState('none');
    useEffect(() => {
            setBack(margin === id ? 'black' : 'none')
        }, [margin])
    return (
        <input onClick={() => setMargin(id)} style={{background: back}} className={arrow === 'left' ? cl.inputLeft 
            : arrow === 'right' ? cl.inputRight 
                : cl.carouselInput } type="radio" name="input" />
    )
}

export default ImputRadio