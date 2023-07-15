import React from "react";

function Quote({ quote }) {
    return <div>
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
    </div>;
}

export default Quote;
