import React, { useEffect, useMemo } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import useMans from './../../hooks/useMans';
import SlideElements from "./SlideElements/SlideElements";

const Slider = () => {
    const { getMans, mans } = useMans();
    useEffect(() => {
        getMans()
    }, [])

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ];

    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>
    }


    const renderShoes = useMemo(() =>
        mans?.map((el, i) =>
            <SlideElements key={`${el.id}_${i}`} {...el} />)
        , [mans])
    console.log(mans);
    return (
        <div className="container">
            <Slide {...properties} autoplay={false} indicators={true} responsive={responsiveSettings}>
                {renderShoes}
            </Slide>
        </div>
    )
}

export default Slider