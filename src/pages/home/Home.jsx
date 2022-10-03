import React from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";
import Lists from "../../components/list/Lists";
import Spinner from "../../UI/spinner/Spinner";
import cl from "./Home.module.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

library.add(faCartShopping)

const Home = () => {
    const cart = useSelector(state => state.cart.cart);
    const router = useNavigate();
    return (
        <div className={cl.home}>
            <Carousel />
            <Lists />
            <a className={cl.cart} onClick={() => router('/cart')}>
                <FontAwesomeIcon className={cl.cartImage} icon="fa-solid fa-cart-shopping" />
            <div className={cl.counter}>{cart.length}</div>
            </a>
        </div>
    )
}

export default Home 