import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../../API/getFetch";
import { useFetching } from "../../hooks/useFetching";
import Btn from "../../UI/btn/Btn";
import NavBtn from "../../UI/navBtn/NavBtn";
import Spinner from "../../UI/spinner/Spinner";
import cl from './Product.module.scss';
import ProductCard from "./ProductCard";

const Product = () => {
    const [product, setProduct] = useState({});
    const [correctTab, setCorrectTab] = useState('first');
    const params = useParams();
    const [getProd, isProdLoading, isError] = useFetching(async () => {
        const response = await getData.getProd(`https://sandbox.musement.com/api/v3/lists/${params.id}`);
        setProduct(response);
    });
    useEffect(() => {
        getProd()
    }, [])
    return (
        <div className={cl.productInfo}>
            <div className={cl.navBtn}>
                <NavBtn tab={'first'} changeTab={correctTab} onClick={() => setCorrectTab('first')}>Info</NavBtn>
                <NavBtn tab={'second'} changeTab={correctTab} onClick={() => setCorrectTab('second')}>Comments</NavBtn>
            </div>
            {
                isProdLoading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Spinner /></div> :
                correctTab === 'first' ? <ProductCard product={product}/> : <ProductCard comments={product}/>
            }
        </div>
    )
}

export default Product