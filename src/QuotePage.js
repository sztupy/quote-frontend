import QuoteList from "./QuoteList";
import React, { useState, useEffect } from "react";

function QuotePage() {
    const [quotes, setQuotes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [quoteCount, setQuoteCount] = useState(0);

    function changeQuery(query) {
      setSearchQuery(query);
      setQuoteCount(quoteCount + 1);
    }

    useEffect(() => {
      if (searchQuery === "") {
        fetch("https://likeable-standing-beryl.glitch.me/quotes/random")
          .then((res) => res.json())
          .then((res) => setQuotes( [res] ));
      } else {
        let url = new URL("https://likeable-standing-beryl.glitch.me/quotes/search");
        url.search = new URLSearchParams({ term: searchQuery }).toString();

        fetch(url)
        .then((res) => res.json())
        .then((res) => setQuotes( res ));
      }
    },[ quoteCount, searchQuery ]);

    console.log(searchQuery);

    return (
      <div>
          <QuoteList quotes={quotes}></QuoteList>
          <button onClick={() => changeQuery("")}>Get new quote</button>
          <input type="text" onChange={(e) => changeQuery(e.target.value)}></input>
      </div>
    );
}

export default QuotePage;
