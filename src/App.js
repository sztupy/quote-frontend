import "./App.css";
import QuotePage from "./QuotePage";
import AdminPage from "./AdminPage";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import React, { useState } from "react";

function App() {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Quotes</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<QuotePage />} />
              <Route path="/admin" element={token ? <AdminPage token={token}/> : <LoginPage setToken={setToken}/>} />
            </Routes>
          </header>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
