import { Grid, Typography } from "@mui/material";
import React from "react";

const SeasonWear = () => {
    return (
        <Grid sx={{ width: "100%", height: "fit-content", padding: "50px", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <img style={{ padding: "20px", borderRadius: "20px" }} src="https://i.pinimg.com/564x/c2/7d/8c/c27d8c8a7d5075bdbba7c9da469f8d73.jpg" />
            <Grid>
                <Typography variant="h2">Season Clothes</Typography>
                <Typography variant="h4">Type: Sneakers</Typography>
                <Typography mt={2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, <br /> harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro architecto inventore iste consequatur similique non.</Typography><br />
            </Grid>
        </Grid>
    )
}

export default SeasonWear