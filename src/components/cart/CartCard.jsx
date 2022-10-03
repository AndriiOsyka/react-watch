import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductToCart } from "../../asyncAction/customers";
import Btn from "../../UI/btn/Btn";
import cl from './Cart.module.scss';

const CartCard = ({id, getId, data}) => {
    const dispatch = useDispatch();
    const router = useNavigate();
    const [count, setCount] = useState(0);
    const cart = useSelector(state => state.cart.cart);

    const deleteFromCart = (id) => {
        getId(id);
        dispatch({type: 'DELETE_PRODUCT', payload: cart.findIndex(prod => prod.id === id)});
    }
    useEffect(() => {
        const array = [];
        for(let prod of cart) {
            array.push(prod);
        }
        if(array.length > 0) {
            const arr = array.filter(prod => prod.id === data.id);
            setCount(arr.length);
        }
    }, [cart.length, id])
    return (
        <div className={cl.card}>
            <img src={data.cover_image_url} alt="img" />
            <h2>{data.subtitle}</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <Btn onClick={() => router(`/product/${data.id}`)}>Read more</Btn>
            <Btn onClick={() => dispatch(fetchProductToCart(data.id))}>Add to cart</Btn>
            <Btn onClick={() => deleteFromCart(data.id)}>Delete from cart</Btn>
            </div>
            <h2>{count}</h2>
        </div>
    )
}

export default CartCard