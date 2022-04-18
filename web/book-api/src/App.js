import './App.css';
import Quotes from './Quotes';
import React from 'react';
import CadForm from './components/CadForm';

function App() {
  return (
    <div className="App">
        <CadForm/>
        <Quotes />
    </div>
  );
}

export default App;