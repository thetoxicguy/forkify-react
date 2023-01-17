import * as React from 'react';
import * as ReactDOM from "react-dom/client";

import App from './App';
import "./sass/main.scss";

const mountNode = document.getElementById("app");
const root = ReactDOM.createRoot(mountNode!)

root.render(<App name="Daniel" />);
