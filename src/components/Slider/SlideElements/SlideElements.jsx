import React from "react";
import scss from "./slideElements.module.scss"

const SlideElements = ({ color, tid, model, size, type, name, img, price }) => {
    return (
        <div className={scss.wrapper}>
            <div className={scss.insideWrapper}>
                <header>
                    <img src={img} alt="" />
                </header>
                <main style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "10%"
                }}>
                    <div>
                        <h1>{name}</h1>
                        <h4>{model}</h4>
                    </div>
                    <div>
                        <h1>Price: {price}$</h1>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SlideElements;