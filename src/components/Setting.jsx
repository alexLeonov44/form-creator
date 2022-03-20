import React from 'react'
import { HexColorPicker } from "react-colorful";

export default function Setting() {
    const [color, setColor] = React.useState("#aabbcc");
  return (
    <div style={{backgroundColor:color}}>
    Setting
    <HexColorPicker color={color} onChange={setColor} />;  
    </div>
  )
}


