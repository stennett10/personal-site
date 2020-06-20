import React, { Component } from "react";
import Breakpoint from "react-socks";

class SiteHeader extends Component {
    render() {
        return (
            <div
                style={{
                    padding: "0px 15px",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <h1>
                    <Breakpoint medium up>
                        <div>
                            <div
                                style={{
                                    height: 20,
                                    width: 230,
                                    backgroundColor: "#ff6",
                                    transform: "rotate(-4deg)"
                                }}
                            >
                                <span
                                    style={{
                                        transform: "rotate(4deg",
                                        position: "absolute",
                                        top: -10,
                                        color: "#330",
                                        fontWeight: "lighter"
                                    }}
                                >
                                    Josh Stennett
                                </span>
                            </div>
                        </div>
                    </Breakpoint>
                    <Breakpoint small down>
                        <div>
                            <div
                                style={{
                                    height: 20,
                                    width: 50,
                                    backgroundColor: "#ff6",
                                    transform: "rotate(-4deg)"
                                }}
                            >
                                <span
                                    style={{
                                        transform: "rotate(4deg",
                                        position: "absolute",
                                        top: -10,
                                        color: "#330"
                                    }}
                                >
                                    JS
                                </span>
                            </div>
                        </div>
                    </Breakpoint>
                </h1>
            </div>
        );
    }
}

export default SiteHeader;
