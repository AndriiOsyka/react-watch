import React from "react";
import cl from './Spinner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)

const Spinner = () => {
    return (
        <FontAwesomeIcon className={cl.spinner} icon="fa-solid fa-spinner" />
    )
}

export default Spinner