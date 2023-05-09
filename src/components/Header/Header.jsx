import React, { useEffect, useMemo } from "react";
import { Grid, Typography, IconButton, Badge } from "@mui/material";
import { social } from "../../constants/headerConsts";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCart from "../../hooks/useCart";

const Header = ({ isPage }) => {

  const renderSocial = useMemo(
    () =>
      social.map((el) => (
        <IconButton color="primary" key={el.id}>
          {el.img}
        </IconButton>
      )),
    []
  );

  return (
    <div className="container">
      <Grid
        mt={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: "0",
        }}
      >
        {
          isPage ? <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "600",
              }}
            >
              Alog
            </Typography>
            <IconButton>
              <Badge badgeContent={5} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Grid>
            : <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "600",
                }}
              >
                Alog
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {renderSocial}
              </Grid>
            </Grid>
        }
      </Grid>
    </div>
  );
};

export default React.memo(Header);
