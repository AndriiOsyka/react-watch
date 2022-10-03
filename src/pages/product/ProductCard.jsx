import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import cl from './Product.module.scss';

const ProductCard = ({ product, comments }) => {

    const [comArray, setComArray] = useState([]);

    useEffect(() =>{
        if(comments) {
            setComArray(Object.entries(comments));
        }
    }, [comments])

    return (
        <div>
            {
                !!product
                    ? <div className={cl.productCard}>
                        <br />
                        <img src={product.cover_image_url} alt="image" />
                        <h3>Title:<br /> {product.title}</h3><br />
                        <h3>Subtitle:<br /> {product.subtitle}</h3><br />
                        <h3>Description:<br /> {product.description}</h3><br />
                    </div>
                    : <div className={cl.productCard}>
                        { comArray.map(com => <h3>{
                            typeof com[0] !== 'object' && typeof com[1] !== 'object' ? <h3>{com[0]}: {com[1]}</h3> : null}</h3>) }
                    </div>
            }
        </div>
    )
}

export default ProductCard