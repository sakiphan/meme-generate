import React from "react";
import "./App.css";
import Header from "./Header";
import MemeGenereator from "./MemeGenereator";

const App = () => {
  return (
    <div>
      <Header name="Meme Generator"  />
      <MemeGenereator/>
    </div>
    
  );
};

export default App;
