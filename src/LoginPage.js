import React, { useState } from "react";

const emptyLogin = {
    username: "",
    password: "",
};

function LoginPage({ setToken }) {
    const [credentials, setCredentials] = useState(emptyLogin);
    const [saveState, setSaveState] = useState(false);
    const [notes, setNotes] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (saveState) {
            return;
        }

        setNotes("Logging in...");
        setSaveState(true);

        fetch("https://likeable-standing-beryl.glitch.me/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json())
          .then((res) => {
            if (res.token) {
                setSaveState(false);
                setCredentials(emptyLogin);
                setToken(res.token);
                setNotes("");
            } else {
                setSaveState(false);
                setNotes(res.error);
            }
        });
    }

    function updateCredentials(e) {
        const newCredentials ={
            ...credentials,
            [e.target.name]: e.target.value,
        };

        setCredentials(newCredentials);
    }

    return <div>
            <h1>You need to log in!</h1>
            <p>{notes}</p>
            <form id="admin" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="username">Username: </label><input onChange={updateCredentials} value={credentials.username} name="username"></ input>
                </p>
                <p>
                    <label htmlFor="password">Password: </label><input onChange={updateCredentials} value={credentials.password} name="password" type="password"></input>
                </p>
                <p>
                    <input type="submit" value="Login"></input>
                </p>
            </form>
        </div>;
}

export default LoginPage;
