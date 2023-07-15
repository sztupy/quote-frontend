import "./App.css";
import Quote from "./Quote";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [quoteCount, setQuoteCoun] = useState(0);

  useEffect(() => {
    fetch("https://likeable-standing-beryl.glitch.me/quotes/random")
      .then((res) => res.json())
      .then((res) => setQuote(res));
  },[ quoteCount ]);

  return (
    <div className="App">
      <header className="App-header">
        <Quote quote={quote}></Quote>
        <button onClick={() => setQuoteCoun(quoteCount + 1)}>Get new quote</button>
      </header>
    </div>
  );
}

export default App;
