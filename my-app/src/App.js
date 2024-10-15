
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainCard from './src/MainCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <MainCard />
    </div>
  );
}

export default App;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />

  </div>
);


