import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import useMans from '../../hooks/useMans';
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

const DetailItem = () => {
    const classes = useStyles();
    const { id } = useParams()
    const { getManDetail, manDetail } = useMans()
    const { addToCart } = useCart()

    useEffect(() => {
        getManDetail(id)
    }, [])

    return (
        <div className='container'>
            <Header isPage={true} />
            <div className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img className={classes.image} src={manDetail.img} alt={manDetail.name} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">{manDetail.name}</Typography>
                        <Typography variant="body1">Model: {manDetail.model}</Typography>
                        <Typography variant="body1">Type: {manDetail.type}</Typography>
                        <Typography variant="body1">Color: {manDetail.color}</Typography>
                        <Typography variant="body1">Price: ${manDetail.price}</Typography>
                        <Typography variant="body1">Available Sizes: {manDetail.size?.join(', ')}</Typography>
                        <Button onClick={() => addToCart(manDetail)} variant="contained" color="primary">Add to Cart</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default DetailItem;