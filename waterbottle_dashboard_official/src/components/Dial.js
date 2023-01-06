import React, { useState } from 'react'
import {  HighContrast } from 'react-dial-knob'

export default function Dial(props) {
    const [value, setValue] = useState(0)
    return < HighContrast
        diameter={200}
        min={0}
        max={100}
        step={1}
        value={value}
        theme={{
             HighContrastColor: 'red'
        }}
    
        onValueChange={setValue}
        ariaLabelledBy={'my-label'}
    
       
    >
         <h5>{props.text}</h5>

    </ HighContrast>
}