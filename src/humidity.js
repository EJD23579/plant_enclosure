import { Grid, Slider } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import React, { useState } from "react";
import ReactSlider from "react-slider";

 function Humidity(){


    return (<Grid class="slider">
        <Slider style={{
        textAlign:"center",
        width:500,
       }}
        aria-label="Humidity"
        defaultValue={50}
        valueLabelDisplay="auto"
        min={0}
        max={100}>
        

            </Slider>
            </Grid>
        );
}


export default Humidity