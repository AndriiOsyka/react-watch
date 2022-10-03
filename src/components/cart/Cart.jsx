import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Btn from "../../UI/btn/Btn";
import cl from './Cart.module.scss';
import CartCard from "./CartCard";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const [id, setId] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [corrArr, setCorrArr] = useState([]);

    const setIdF = (id) => {
        setId(id);
    }
    const deleteAllProducts = () => {
        dispatch({type: 'DELETE_ALL', payload: ''});
    }
    
    useEffect(() => {
        setId(0);
        setTotalPrice(0);
        const arr = [];
        for(let i = 0; i < cart.length; i++) {
            arr.push(cart[i]);
        }
        let counter = 0;
        if(cart.length > 0){
            cart.map(prod => counter += prod.id);
            for(let i = 0; i < arr.length; ++i) {
                for(let j = i + 1; j < arr.length; j++) {
                    if(!!arr[i] && !!arr[j]) {
                        if(arr[i].id === arr[j].id) {
                            i--;
                            arr.splice(j, 1);
                        }
                    }
                }
            }
            setCorrArr(arr);
        }
        setTotalPrice(counter);
        console.log('cart: ' + cart.length);
    }, [cart.length, id])
    return (
        <div className={cl.cart}>
            <div className={cl.cartBody}>
            {
                cart.length < 1 ?
                    <div>Cart is empty</div>
                : corrArr.map(product => <CartCard id={id} getId={setIdF} data={product} />)
            }
            </div>
            {cart.length > 0 && <div className={cl.totalPrice}>
                <Btn onClick={() => deleteAllProducts()}>Delete all products</Btn>
                Total price is: {totalPrice}$.
            </div>}
        </div>
    )
}

export default Cart