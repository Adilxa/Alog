import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import useWomans from '../../hooks/useWomans';
import useCart from '../../hooks/useCart';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
        marginTop: 25
    },
    image: {
        maxWidth: '100%',
        marginBottom: theme.spacing(2),
    },
}));

const DetailItemWomans = () => {
    const classes = useStyles();
    const { id } = useParams()
    const { getWowomanDetail, womanDetail } = useWomans()
    const { addToCart } = useCart()

    console.log(womanDetail);
    useEffect(() => {
        getWowomanDetail(id)
    }, [])



    return (
        <div className='container'>
            <Header isPage={true} />
            <div className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.image} src={womanDetail?.img} alt={womanDetail.name} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">{womanDetail.name}</Typography>
                        <Typography variant="body1">Model: {womanDetail.model}</Typography>
                        <Typography variant="body1">Type: {womanDetail.type}</Typography>
                        <Typography variant="body1">Color: {womanDetail.color}</Typography>
                        <Typography variant="body1">Price: ${womanDetail.price}</Typography>
                        <Typography variant="body1">Available Sizes: {womanDetail.size?.join(', ')}</Typography>
                        <Button onClick={() => addToCart(womanDetail)} variant="contained" color="primary">Add to Cart</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default DetailItemWomans;