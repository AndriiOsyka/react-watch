import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getData from "../../API/getFetch";
import { useFetching } from "../../hooks/useFetching";
import Spinner from "../../UI/spinner/Spinner";
import List from "./List";
import cl from './List.module.scss';

const Lists = () => {
    const [products, setProducts] = useState([]);
    const [getProd, isProdLoading, prodError] = useFetching(async () => {
        const response = await getData.getProd('https://sandbox.musement.com/api/v3/lists');
        setProducts(response);
    });
    useEffect(() => {
        getProd();
    }, [])
    return (
        <div>
            {
            isProdLoading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Spinner /></div> :
            <div className={cl.lists}>
            {
                products.map(prod =>
                    <List data={prod} />)
            }
            </div>
            }
        </div>
    )
}

export default Lists