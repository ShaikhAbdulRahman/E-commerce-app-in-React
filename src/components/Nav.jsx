import { Card, CardContent, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navitem from './Navitem';
import { nav } from '../data/nav';

const Nav = () => {
    const[data,setData]=useState([]);

    useEffect(()=>{
        setData(nav)
    },[])
  return (
    <Card sx={{bgcolor:"#ed6c02",margin:0,height:80,marginBottom:"20px"}}>
        <CardContent>
    <Grid container spacing={1}>
        {
            data.map((item)=>
            <Navitem item={item} />
            )
        }
    </Grid>

        </CardContent>
    </Card>
  )
}

export default Nav