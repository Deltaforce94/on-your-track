import React from "react";
import "./App.css";


import LoginForm from "./GPTCODE/LoginForm";
import NavBar from "./GPTCODE/NavBar";

const App = () => {
  return (
    <div id="App">
      <NavBar />
      <LoginForm />
    </div>
  )
};

export default App;