import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function CartItem({ img, name, model, color, type, id, removeFromArr }) {


    return (
        <Card sx={{ width: "30%" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {model} / {color}
                    </Typography>
                    <Typography>
                        {type}
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button onClick={() => removeFromArr(id)} size="small" color="primary">
                    Remove from cart
                </Button>
            </CardActions> */}
        </Card>
    );
}