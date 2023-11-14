import React from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter'; // Import your CurrencyConverter component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter App</h1>
        <CurrencyConverter /> {/* Render your CurrencyConverter component here */}
      </header>
    </div>
  );
}

export default App;
