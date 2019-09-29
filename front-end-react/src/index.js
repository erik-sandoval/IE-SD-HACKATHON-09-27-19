import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom";
import "./index.css";
import App from "./App";

import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
