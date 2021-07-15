import React from 'react';
import { Route } from 'react-router-dom';
import FormCreator from './components/FormCreator';
import StartPage from './components/StartPage';

function App() {
  const optionInputs = ['input', 'textarea', 'checkbox'];
  const [inputCounter, setInputCounter] = React.useState({
      'input': 0,
      'textarea': 0,
      'checkbox': 0,
  })
  const [build, setBuild] = React.useState(false)

  const addInput=(inputs)=>{
    setBuild(false)
   setInputCounter({...inputCounter[inputs] ++,...inputCounter})
  }
  const removeInput=(inputs)=>{
    setBuild(false)
      if(inputCounter[inputs] > 0){
    setInputCounter({...inputCounter[inputs] --,...inputCounter})
      }
   }
  const buildForm=(value)=>{
    setBuild(value)
   }
  return (
   <>
   <Route exact path="/" render={() => <StartPage/>} />
   <Route path="/form" render={() => <FormCreator optionInputs={optionInputs} inputCounter={inputCounter}
    addInput={addInput}removeInput={removeInput} build={build} buildForm={buildForm} />} />
   </>
  );
}

export default App;
