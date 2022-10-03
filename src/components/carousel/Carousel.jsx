import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import InputRadio from "../../UI/input-radio/InputRadio";
import cl from "./Carousel.module.scss";
import getData from "../../API/getFetch";
import { useFetching } from "../../hooks/useFetching";
import Spinner from "../../UI/spinner/Spinner";

const Carousel = () => {
    const [slides, setSlides] = useState([
        {
            id: 1,
            image: 'first.jpg'
        },
        {
            id: 2,
            image: 'second.jpg'
        },
        {
            id: 3,
            image: 'third.jpg'
        },
        {
            id: 4,
            image: 'fourth.jpg'
        }
    ]);

    const [fetchProd, isProdLoading, prodError] = useFetching(async () => {
        const response = await getData.getProd('https://sandbox.musement.com/api/v3/lists');
        let id = 0;
        response.map((obj) => {
            obj.id = id;
            id++;
         })
        setSlides(response);
        }
    );

    const [margin, setMargin] = useState(0);

    useEffect(() => {
        fetchProd();
    }, []);

    const rightClick = () => {
        margin === slides.length - 1 ? setMargin(0) : setMargin(margin + 1);
    }

    const leftClick = () => {
        margin === 0 ? setMargin(slides.length - 1) : setMargin(margin - 1);
    }

    return (
        <div style={{minHeight: '130px'}}>
            {
            isProdLoading ? <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Spinner /></div> :
            <div className={cl.carousel}>
            <div style={{marginLeft: '-' + (100 * margin) + '%'}} className={cl.carouselItem}>
            {
                slides.map(slide =>
                    <CarouselItem key={slide.id} slide={slide.cover_image_url} />
                    )
                }
            </div>
            <div onClick={() => leftClick()} className={cl.left}>
                <InputRadio id='id' arrow='left' />
            </div>
            <div onClick={() => rightClick()} className={cl.right}>
                <InputRadio id='id' arrow='right' />
            </div>
            <div className={cl.panel}>
                {
                    slides.map(slide =>
                        <InputRadio className={cl.back} margin={margin} id={slide.id} arrow='radio' />)
                }
            </div>
        </div>
        }
        </div>
    )
} 

export default Carousel