// src/App.js
import React from 'react';
import './App.css';
import DailyVerse from './DailyVerse';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <DailyVerse />
      </header>
      <footer className="footer">
        &copy; Moabmo {currentYear}
      </footer>
    </div>
  );
}

export default App;
