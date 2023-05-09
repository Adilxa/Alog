import { Grid } from "@mui/material";
import React from "react";
import scss from "./ChooseGender.module.scss";
import { Link } from "react-router-dom";

const ChooseGender = () => {
  return (
    <div className="container">
      <Grid
        mt={10}
        sx={{
          display: "flex",
          alignItems: "center",
          transition: "ease-in-out 1s",
        }}
      >
        <Link to={"/formans"} className={scss.man}>
          <h1>For Mans</h1>
          <img
            src="https://static.wixstatic.com/media/ebd955_59f6850fd65c448ea93b1db254ee4bb2~mv2_d_3744_5615_s_4_2.png/v1/crop/x_0,y_132,w_3744,h_5351/fill/w_411,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_59f6850fd65c448ea93b1db254ee4bb2~mv2_d_3744_5615_s_4_2.png"
            alt=""
          />
        </Link>
        <div className={scss.woman}>
          <img
            src="https://static.wixstatic.com/media/ebd955_7e944e84dee44943983e589c702efb5b~mv2_d_3425_5446_s_4_2.png/v1/crop/x_72,y_80,w_3258,h_4897/fill/w_411,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebd955_7e944e84dee44943983e589c702efb5b~mv2_d_3425_5446_s_4_2.png"
            alt=""
          />
          <h1>For Womans</h1>
        </div>
      </Grid>
    </div>
  );
};

export default ChooseGender;
