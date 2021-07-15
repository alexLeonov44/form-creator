import React from 'react';
import ArrowBackIosSharpIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { IconButton } from '@material-ui/core';

export default function FormCounter({optionInputs,inputCounter,addInput,removeInput}) {
 
  return (
    <div>
      <ul>
        { optionInputs.map((inputs, index) => (
          <li key={inputs + index} className="form__creator__block__li">
            <span>{inputs}</span>
            <IconButton onClick={() => removeInput(inputs)} color="primary">
              <ArrowBackIosSharpIcon />
            </IconButton>
            <span>{inputCounter[inputs]}</span>
            <IconButton onClick={() => addInput(inputs)} color="primary">
              <ArrowForwardIosSharpIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
