import { Typography, Grid } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ItemCard from "../../components/itemCard/ItemCard";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";
import Preloader from "../../components/preloader/Preloader";
import CartItem from "../../components/cartItem/CartItem";
import SeasonWear from "../../components/seasonWear/SeasonWear";

const CartPage = () => {
    const { id } = useParams()
    const { getDetail, user, isLoading } = useUser()
    const [newArr, setNew] = useState(null);

    useEffect(() => {
        getDetail(id)
    }, [id])

    console.log(newArr);

    const removeFromArr = (id) => {
        console.log(id);
        const arr = user?.cart.filter((el) => el.id != id)
        setNew(arr)
    }

    const renderCartItems = useMemo(() => user?.cart?.filter((el) => el != "").map((item) => <CartItem removeFromArr={removeFromArr} key={item.tid} {...item} />), [user])
    if (isLoading) return <Preloader />
    return (
        <>
            <Header isPage={true} />
            <div className="container">
                <Grid sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: 10,
                    gap: 4
                }}>{renderCartItems}</Grid>

            </div>
            <SeasonWear />
            <Footer />
        </>
    )
}

export default CartPage;