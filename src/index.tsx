import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

import "./sass/main.scss";

const mountNode = document.getElementById("app");
const root = ReactDOM.createRoot(mountNode!)

root.render(
    <Provider store={ store }>
        <App name="Daniel" />
    </Provider>
);
