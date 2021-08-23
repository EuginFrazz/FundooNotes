import React, { useState } from 'react';
import "./Colorpicker.css"

let colorpic = [{color:"yellow"},
{color:"red"},
{color:"blue"},
{color:"gold"},
{color:"violet"},
{color:"orange"},
{color:"lightgray"},
{color:"pink"},
{color:"moccasin"},
{color:"aquamarine"},
{color:"lightcyan"},
{color:"lawngreen"}]


const Colorpicker = () => {
    return (
        <div className="colorwhbox">
            {colorpic.map(({color},index)=>{
return(
<>
<div className="colorbox" style={{backgroundColor:color}}>

</div>
</>
)

}) }
            
        </div>
    );
};

export default Colorpicker;