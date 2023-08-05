import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navitem = ({ item }) => {
  return (
    <Grid item xs={item.xs} sx={{margin:1}}>
      <Link to={item.path}>
        <Button
          sx={{}}
          color="secondary"
          variant="contained"
          fullWidth
        >
          {item.title}
        </Button>
      </Link>
    </Grid>
  );
};

export default Navitem;
