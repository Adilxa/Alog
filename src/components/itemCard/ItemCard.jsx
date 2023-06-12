import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useUser from '../../hooks/useUser';

const useStyles = makeStyles((theme) => ({
    card: {
        width: "30%",
        margin: theme.spacing(2),
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        position: "relative"
    },
    media: {
        height: 300,
    },
    content: {
        paddingTop: theme.spacing(2),
    },
}));

const ItemCard = (props) => {
    const classes = useStyles();
    const { addToCart } = useUser()
    const {
        color,
        img,
        model,
        name,
        price,
        size,
        tid,
        type,
        isClickable,
        id,
        cart,
        setState
    } = props

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleAddCart = (e) => {
        setState((prev) => prev + 1)
        e.preventDefault()
        const item = {
            color,
            name,
            model,
            type,
            price,
            img,
            id: getRandomNumber(1, 1000050550)
        }
        addToCart(id, {
            cart: [...cart, item]
        })
    }

    return (
        <Card className={classes.card}>
            <Link to={`${tid}`}>
                <CardMedia className={classes.media} image={img} title={name} />
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="body1" color="textSecondary">
                        {model}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Type: {type}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Color: {color}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Price: ${price}
                    </Typography>
                    {
                        isClickable && <IconButton onClick={(e) => handleAddCart(e)} sx={{
                            position: "absolute",
                            top: 10,
                            right: 10
                        }}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    }
                </CardContent>
            </Link>
        </Card>
    );
};

export default ItemCard;