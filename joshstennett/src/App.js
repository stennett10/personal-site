import React from "react";
import "./App.css";

import SiteHeader from "./components/siteheader";
import Navigation from "./components/navigation";

import { BrowserRouter, Route } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
import Design from "./pages/design";
import Structure from "./pages/structure";
function App() {
    return (
        <BrowserRouter>
            <BreakpointProvider>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "80vw" }}>
                        <SiteHeader />
                        <Navigation />

                        <Route exact path="/" component={Design} />
                        <Route path="/structure" component={Structure} />
                    </div>
                </div>
            </BreakpointProvider>
        </BrowserRouter>
    );
}

export default App;
