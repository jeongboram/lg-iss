import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Test from "./pages/test";
import Introduce from "./pages/introduce";
import "./styles/ui.scss";

function App() {
    return (
        <>
            <header>
                <h1>test</h1>
            </header>
            <Router>
                <Route path="/test">
                    <Test />
                </Route>
                <Route path="/introduce">
                    <Introduce />
                </Route>
            </Router>
        </>
    );
}

export default App;
