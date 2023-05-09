import React, { useEffect, useMemo } from "react";
import Header from "../../components/Header/Header";
import useMans from "../../hooks/useMans";
import Preloader from "../../components/preloader/Preloader";
import { Grid } from "@mui/material";

const ForMans = () => {
    const { isLoading, getMans } = useMans();

    useEffect(() => {
        getMans()
    }, [])

    if (isLoading) return <Preloader />
    return (
        <>
            <Header isPage={true} />
            <div className="container">
                <Grid container sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "space-between"
                }}>
                </Grid>
            </div>
        </>
    )
}

export default ForMans;