import React, { useState } from "react";

const emptyQuote = {
    quote: "",
    author: "",
};

function AdminPage({ token }) {
    const [quote, setQuote] = useState(emptyQuote);
    const [saveState, setSaveState] = useState(false);
    const [notes, setNotes] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (saveState) {
            return;
        }

        setNotes("Saving...");
        setSaveState(true);

        fetch("https://likeable-standing-beryl.glitch.me/quotes", {
            method: "POST",
            body: JSON.stringify({
                quote: quote.quote,
                author: quote.author,
                token: token,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json())
          .then((res) => {
            if (res.error) {
                setSaveState(false);
                setNotes(res.error);
            } else {
                setSaveState(false);
                setQuote(emptyQuote);
                setNotes("");
            }
        });
    }

    function updateQuote(e) {
        const newQuote ={
            ...quote,
            [e.target.name]: e.target.value,
        };

        setQuote(newQuote);
    }

    return <div>
            <h2>Create new quote</h2>
            <p>{notes}</p>
            <form id="admin" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="quote">Quote: </label><input onChange={updateQuote} value={quote.quote} name="quote"></ input>
                </p>
                <p>
                    <label htmlFor="author">Author: </label><input onChange={updateQuote} value={quote.author} name="author"></input>
                </p>
                <p>
                    <input type="submit" value="Create quote"></input>
                </p>
            </form>
        </div>;
}

export default AdminPage;
