import React from "react";
import Form from "../form/Form";
import cl from './Modal.module.scss';

const Modal = ({prod, visible, setVisible}) => {
    const rootClasses = [cl.modal];
    console.log(visible);
    if(visible) {
        rootClasses.push(cl.active)
    }
    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                <btn className={cl.close} onClick={() => setVisible(false)} />
                <Form prod={prod} />
            </div>
        </div>
    )
}

export default Modal