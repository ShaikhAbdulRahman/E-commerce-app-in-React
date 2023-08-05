import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Productitem from "./Productitem";

const Product = () => {
  const [data, setData] = useState([]);
  const [origdata, setOrigdata] = useState([]);
  const [txt, setTxt] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCat, setSelectedCat] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setOrigdata(result.data);

    const resultcategory = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategory(resultcategory.data);
  };
  useEffect(() => {
    const search = origdata.filter((item) => item.category === selectedCat);
    setData(search);
  }, [selectedCat]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = origdata.filter((item) =>
      item.title.toUpperCase().includes(txt.toUpperCase())
    );
    setData(filtered);
  }, [txt]);

  return (
    <Grid container spacing={2}>
      {category.map((item) => (
        <Grid item xs={2}>
          <Button
            onClick={() => setSelectedCat(item)}
            variant="contained"
            fullWidth
            color="info"
          >
            {item}
          </Button>
        </Grid>
      ))}

      <Grid item xs={4}></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setTxt(e.target.value)}
          variant="outlined"
          label="Search Products"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}></Grid>
      {data.map((item) => (
        <Productitem item={item} />
      ))}
    </Grid>
  );
};

export default Product;
