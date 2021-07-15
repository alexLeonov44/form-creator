import React from 'react';
import FormCounter from './FormCounter';
import Button from '@material-ui/core/Button';

export default function FormCreator({optionInputs,inputCounter,addInput,removeInput,build,buildForm}) {
    console.log(inputCounter.input)
  return (
    <div className="form">
      <h1>Make your form!</h1>
      <div className="form__creator__block">
       <FormCounter  optionInputs={optionInputs} inputCounter={inputCounter} addInput={addInput}removeInput={removeInput}/>
      </div>
      <div className="form__builded__block">
      <Button onClick={()=>buildForm(true)} variant="contained" color="secondary">Build</Button>
       {
           build &&
       
        <form>
            <p>input</p>
            {
         Array(inputCounter.input).fill().map((_,i)=>(<input type={optionInputs[0]} />))
            }
             <p>textarea</p>
            {
         Array(inputCounter.textarea).fill().map((_,i)=>(<input type={optionInputs[1]} />))
            }
             <p>checkbox</p>
            {
         Array(inputCounter.checkbox).fill().map((_,i)=>(<input type={optionInputs[2]} />))
            }
           
        </form>
       
        }
      
      </div>
    </div>
  );
}
