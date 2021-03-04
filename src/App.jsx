// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <Router>
                <Switch>
                    <Route path="/about">
                    </Route>
                    <Route path="/users">
                    </Route>
                    <Route path="/">
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
