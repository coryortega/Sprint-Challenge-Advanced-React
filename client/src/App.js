import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchData from './components/classComponent'

function App() {
  return (
    <div className="App">
        <h1>Players</h1>
      <FetchData />
    </div>
  );
}

export default App;
