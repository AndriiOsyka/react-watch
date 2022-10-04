import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import getData from "../../API/getFetch";
import { useFetching } from "../../hooks/useFetching";
import Form from "../../UI/form/Form";
import Modal from "../../UI/modal/Modal";
import Spinner from "../../UI/spinner/Spinner";
import List from "./List";
import cl from './List.module.scss';

const Lists = () => {
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const [id, setId] = useState(0);
    const [getProd, isProdLoading, prodError] = useFetching(async () => {
        const response = await getData.getProd('https://sandbox.musement.com/api/v3/lists');
        setProducts(response);
    });
    const prod = useMemo(() => {
        return products[products.findIndex(product => product.id === id)];
    }, [id]) 
    useEffect(() => {
        getProd();
    }, [])
    return (
        <div>
            <Modal prod={prod} visible={visible} setVisible={setVisible} />
            {
            isProdLoading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div> :
            <div className={cl.lists}>
            {
                products.map(prod =>
                    <List setVisible={setVisible} setId={setId} data={prod} />)
            }
            </div>
            }
        </div>
    )
}

export default Lists