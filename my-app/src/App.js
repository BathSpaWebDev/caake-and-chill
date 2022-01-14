import React from "react";
import { GridContent } from "./components/Grid";
import { Header } from "./components/Header.jsx";
import { NavBar } from "./components/NavBar";
import "./App.css";


const App = () => {

  return (
    <main>
      <NavBar  
      title={"My Basket"} 
      total={"0.00"}/>
      
      <GridContent />
    </main>

  );
};

export default App;