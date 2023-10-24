import { useState } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import Char from './Char/Char'; 

function App() {
  const [getState, setState] = useState({
    userInput: 'default'
  })
  const inputChangeHandler = (event) => {
    setState((prevState)=>({
      ...prevState,
      userInput: event.target.value
    }))
  }

  const deleteCharHandler = (index) => {
    const text = getState.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    setState((prevState) => ({
      ...prevState,
      userInput: updatedText
    }))
  }
  const charList = getState.userInput.split('').map((ch, index) => {
    return <Char character={ch} key={index} clicked={()=>deleteCharHandler(index)}
    />
  })
  return (
    <div className="App">
      <input type='text' onChange={inputChangeHandler} value={getState.userInput}/>
      <ValidationComponent length={getState.userInput.length}/>
      {charList}
    </div>
    
  );
}

export default App;
