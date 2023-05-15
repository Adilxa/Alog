import React, { useEffect, useMemo, useState } from "react";
import { Grid, Typography, IconButton, Badge, Select, Box, FormControl, MenuItem, InputLabel } from "@mui/material";
import { social } from "../../constants/headerConsts";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useCart from "../../hooks/useCart";
import { Link } from 'react-router-dom';
import useUser from "../../hooks/useUser";
import { useParams } from 'react-router-dom';

const Header = ({ isPage, filtering, setType, name, cart }) => {
  const [item, setItem] = React.useState('');
  const { id } = useParams()

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const renderSocial = useMemo(
    () =>
      social?.map((el) => (
        <IconButton color="primary" sx={{ color: " rgba(244, 167, 16, 0.7)" }} key={el.id}>
          {el.img}
        </IconButton>
      )),
    []
  );

  const renderFilter = useMemo(() =>
    filtering && Array?.from(filtering)?.map((el) =>
      <MenuItem onClick={() => setType(el)} value={el} key={el}>{el}</MenuItem>),
    [filtering]
  )

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
              variant="h4"
              sx={{
                fontWeight: "600",
                color: "gray"
              }}
            >
              Alog Store
            </Typography>
            <Grid sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <Typography>{name}</Typography>
              <IconButton>
                <Link to={`/cart/${id}`}>
                  <Badge badgeContent={cart?.length} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </Link>
              </IconButton>
              <FormControl sx={{ width: "130px" }} fullWidth>
                <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={item}
                  label="Filter"
                  onChange={handleChange}
                >
                  {filtering ? renderFilter : ""}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
            : <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "600",
                  color: "gray"
                }}
              >
                Alog Store
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
