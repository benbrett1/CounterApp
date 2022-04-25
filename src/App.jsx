import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";

function App() {
  function handleMinusClick() {
    return null;
  }

  function handlePlusClick() {
    return null;
  }

  return (
    <div className="container">
      <Header />
      <Counter minusClick={handleMinusClick} plusClick={handlePlusClick} />
    </div>
  );
}

export default App;
