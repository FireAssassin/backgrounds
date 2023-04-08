import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import FireBlocks from "./backgrounds/fireblocks";
import RGBblocks from "./backgrounds/rgbblocks";
import Grid from "./backgrounds/grid";
import Lines from "./backgrounds/lines";
import Tree from "./backgrounds/tree";
import "./styles/index.css";

const app = ReactDOM.createRoot(document.querySelector("app"));

switch (window.location.pathname) {
    case "/":
        app.render(
            <>
                <script src="bgselect.js"></script>
                <App />
            </>
        );
        break;
    case "/fireblocks":
        app.render(<FireBlocks />);
        break;
    case "/rgbblocks":
        app.render(<RGBblocks />);
        break;
    case "/grid":
        app.render(<Grid />);
        break;
    case "/lines":
        app.render(<Lines />);
        break;
    case "/tree":
        app.render(<Tree />);
        break;
    default:
        app.render(<App />);
        break;
}
