import React, { useEffect, useMemo } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import useMans from './../../hooks/useMans';
import SlideElements from "./SlideElements/SlideElements";

const Slider = () => {
    const { getMans, mans } = useMans();
    useEffect(() => {
        getMans()
    }, [getMans])

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
        border: '0px',
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><img style={{ width: "100%" }} src="https://img.icons8.com/?size=512&id=41194&format=png" /></button>,
        nextArrow: <button style={{ ...buttonStyle }}><img style={{ width: "100%" }} src="https://img.icons8.com/?size=512&id=41195&format=png" /></button>
    }


    const renderShoes = useMemo(() =>
        mans?.map((el, i) =>
            <SlideElements key={`${el.id}_${i}`} {...el} />)
        , [mans])


    return (
        <div className="container">
            <Slide {...properties} autoplay={false} responsive={responsiveSettings}>
                {renderShoes}
            </Slide>
        </div>
    )
}

export default Slider