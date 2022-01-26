import React from "react";
import { GridContent } from "./components/Grid";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import "./App.css";


const App = () => {

  return (
    <main>
      <NavBar  
      title={"My Basket"} 
      total={"0.00"}/>
      
      <GridContent />

      <Footer />
    </main>

  );
};

export default App;