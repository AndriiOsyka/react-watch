import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../btn/Btn";
import cl from './Form.module.scss';

const Form = ({prod}) => {
    const dispatch = useDispatch();
    const addProduct = (prod) => {
        dispatch({type: 'ADD_PRODUCT', payload: prod})
    }
    return (
        <form>
        <Btn onClick={(e) => {
            e.preventDefault();
            addProduct(prod)}}>Add to cart</Btn>
        </form>
    )
}

export default Form
