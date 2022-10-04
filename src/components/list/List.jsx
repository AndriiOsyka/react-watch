import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductToCart } from "../../asyncAction/customers";
import Btn from "../../UI/btn/Btn";
import Modal from "../../UI/modal/Modal";
import cl from './List.module.scss'

const List =({setId, setVisible, data}) => {
    const router = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={cl.list}>
            <img src={data.cover_image_url} alt="img" />
            <h2>{data.subtitle}</h2>
            <div>
                <Btn onClick={() => router(`/product/${data.id}`)}>Read more</Btn>
                <Btn onClick={() => {
                    setId(data.id);
                    setVisible(true)}}>Add to cart</Btn>
            </div>
        </div>
    )
}

export default List