import React from "react";
import cl from './Carousel.module.scss';

const CarouselItem = ({ slide }) => {
    return (
        <div className={cl.imageBlock}>
            <img className={cl.image} src={slide} alt="" />
        </div>
    )
}

export default CarouselItem