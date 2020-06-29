import React, { useState }from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const initial = {
    mode1: ''
  }
  const [state, setState] = useState(initial);
  
  const handleState = function(row, selected) {
    return setState(state => ({
      ...state, [row]: selected
    }));
  }

  return (
    <div>
      <NavBar handleState={handleState}/>
      {state.mode1 === 'nav' && (<NavBar />)}
    </div>
  );
}

export default App;
