import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Service from "./pages/service";
import Contents from "./pages/contents";
import Statistics from "./pages/statistics";
import PreDetection from "./pages/predetection";
import IssueHistory from "./pages/issuehistory";
import Header from "./components/layout/Header";
import "./styles/font.css";
import "./styles/ui.scss";

function App() {
    return (
        <>
            <Header />
            <Router>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/service">
                    <Service />
                </Route>
                <Route path="/contents">
                    <Contents />
                </Route>
                <Route path="/statistics">
                    <Statistics />
                </Route>
                <Route path="/pre-detection">
                    <PreDetection />
                </Route>
                <Route path="/issue-history">
                    <IssueHistory />
                </Route>
            </Router>
        </>
    );
}

export default App;
