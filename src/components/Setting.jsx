import React from 'react';
import { HexColorPicker } from 'react-colorful';

export default function Setting() {
  const [color, setColor] = React.useState('#aabbcc');

  const changeBackgroundColor = (color) => {
    setColor(color);
    document.body.style.backgroundColor = color;
  };
  return (
    <div>
      Setting
      <HexColorPicker color={color} onChange={(color) => changeBackgroundColor(color)} />;
    </div>
  );
}
