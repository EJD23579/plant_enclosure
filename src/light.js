import { Grid, Slider } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import React, { useState } from "react";
import ReactSlider from "react-slider";

 function Light(){

   
    



    return (<Grid class="slider">
        <Slider style={{
        textAlign:"center",
        width:500,
       }}
        aria-label="Humidity"
        defaultValue={250}
        valueLabelDisplay="auto"
        min={0}
        max={500}>
        

            </Slider>
            </Grid>
    )
}

export default Light;