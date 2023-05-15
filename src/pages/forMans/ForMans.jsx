import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import useMans from "../../hooks/useMans";
import Preloader from "../../components/preloader/Preloader";
import { Grid } from "@mui/material";
import SeasonWear from "../../components/seasonWear/SeasonWear";
import ItemCard from "../../components/itemCard/ItemCard";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/footer/Footer";

const ForMans = () => {
    const { isLoading, getMans, getMansClothes, clothes } = useMans();

    useEffect(() => {
        getMans()
        getMansClothes()
    }, [])
    const [filtredType, setType] = useState("")

    const renderClothes = useMemo(() =>
        clothes?.map((el) => <ItemCard key={el.tid} {...el} />)
        , [clothes,])

    const renderFiltered = useMemo(() =>
        clothes.filter((item) => item.type == filtredType)?.map((el) => <ItemCard key={el.tid} {...el} />)
        , [clothes, filtredType])

    const typesArr = clothes?.map((el) => el.type);

    if (isLoading) return <Preloader />
    return (
        <>
            <Header setType={setType} filtering={new Set(typesArr)} isPage={true} />
            <SeasonWear />
            <div className="container">
                <Grid sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                    {filtredType ? renderFiltered : renderClothes}
                </Grid>
                <Slider />
            </div>
            <Footer />
        </>
    )
}

export default ForMans;