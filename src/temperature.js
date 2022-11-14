import { Grid, Slider } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import React, { useState } from "react";
import ReactSlider from "react-slider";

function Temperature(){


    return (<Grid class="slider">
        <Slider style={{
        textAlign:"center",
        width:500,
       }}
        aria-label="Humidity"
        defaultValue={15}
        valueLabelDisplay="auto"
        min={0}
        max={30}>
        

            </Slider>
            </Grid>
    )
}


export default Temperature