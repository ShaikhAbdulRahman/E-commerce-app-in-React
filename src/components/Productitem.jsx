import { Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";

const Productitem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{height:550}}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <img src={item.image} alt={item.image} width={250} height={230} />
            </Grid>
          <Grid item xs={12} sx={{alignSelf:"center",marginLeft:"10px",marginTop:"-10px"}}>
            <h4>{item.title.slice(0,18)+"..."}</h4>
          </Grid>
          <Grid item xs={6} sx={{fontSize:30,marginLeft:"7px",marginTop:-6}}>
            <p>$ {item.price}</p>
          </Grid>
          <Grid item xs={3} sx={{marginTop:"-20px"}}>
            <p><del>$ {item.price}</del></p>
          </Grid>
          <Grid item xs={12} sx={{marginTop:"-35px",marginLeft:0.5}}>
            <Rating value={item.rating.rate} />
          </Grid>
          <Grid item xs={12} sx={{marginTop:-1,fontSize:14}}>
            <p>{item.description.slice(0,60)+"..."}</p>
          </Grid>
          <Grid item xs={12} sx={{marginTop:-1}}>
            <Button variant="contained" fullWidth>add to cart</Button>
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" fullWidth color="warning">Buy</Button>
          </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Productitem;
