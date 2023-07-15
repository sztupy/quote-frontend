import React from "react";
import Quote from "./Quote";

function QuoteList({ quotes }) {
    return <div>
        {
            quotes.map((q) => <Quote key={q.quote} quote={q}></Quote>)
        }
    </div>;
}

export default QuoteList;
