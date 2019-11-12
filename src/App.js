import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import PizzaList from './components/pizzalist';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <PizzaList></PizzaList>
    </React.Fragment>
  );
}

export default App;
