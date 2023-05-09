import React from "react";
import scss from "./slideElements.module.scss"

const SlideElements = ({ color, tid, model, size, type, name, img, price }) => {
    return (
        <div className={scss.wrapper}>
            <div className={scss.insideWrapper}>
                <header>
                    <img src={img} alt="" />
                </header>
                <main>
                    <h1>{name}   </h1>
                </main>
            </div>
        </div>
    )
}

export default SlideElements;