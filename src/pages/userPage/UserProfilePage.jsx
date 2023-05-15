import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useUser from '../../hooks/useUser';
import Preloader from '../../components/preloader/Preloader';
import LogOut from '../../components/logOut/LogOut';
import useMans from '../../hooks/useMans';
import ItemCard from '../../components/itemCard/ItemCard';
import { Grid } from '@mui/material';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/Slider/Slider';
import SeasonWear from '../../components/seasonWear/SeasonWear';

const UserProfilePage = () => {
    const { id } = useParams();
    const { getDetail, isLoading, user } = useUser()
    const { getMans, getMansClothes, clothes } = useMans();

    const [state, setSatate] = useState(0)

    useEffect(() => {
        getDetail(id)
        getMans()
        getMansClothes()
    }, [state, id])

    const [filtredType, setType] = useState("")

    const renderClothes = useMemo(() =>
        clothes?.map((el) => <ItemCard setState={setSatate} cart={user?.cart} id={id} isClickable={true} key={el.tid} {...el} />)
        , [clothes, id])

    const renderFiltered = useMemo(() =>
        clothes.filter((item) => item.type == filtredType)?.map((el) => <ItemCard setState={setSatate} cart={user?.cart} id={id} isClickable={true} key={el.tid} {...el} />)
        , [clothes, filtredType])

    const typesArr = clothes?.map((el) => el.type);

    if (isLoading) return <Preloader />
    return (
        <>
            <div className="container">
                <Header cart={user?.cart} setType={setType} filtering={new Set(typesArr)} name={user.email} isPage={true} />
                <SeasonWear />
                <Grid sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                    {filtredType ? renderFiltered : renderClothes}
                </Grid>
                <Slider />
            </div>
            <div style={{
                position: "sticky",
                bottom: 0,
                right: 0
            }}>
                <LogOut />
            </div>
            <Footer />
        </>
    );
};

export default UserProfilePage;