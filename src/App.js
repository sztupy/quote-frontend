import "./App.css";
import Quote from "./Quote";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://likeable-standing-beryl.glitch.me/quotes/random")
      .then((res) => res.json())
      .then((res) => setQuote(res));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <Quote quote={quote}></Quote>
      </header>
    </div>
  );
}

export default App;
