// import logo from './logo.svg';
import'./App.css';
import React from 'react';
import Header from'./Components/header/Header';
import Navbar from './Components/navbar/Navbar'
import Menu from './Components/menu/menu';
import Rooter from './Components/rooter/rooter';
import State from './Components/State/State';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Navbar></Navbar>
      <Menu></Menu>
      <Rooter></Rooter>
      <State></State>
   </div>
  )
    
    
}

export default App;
