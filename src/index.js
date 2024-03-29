import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
 document.getElementById('root')
);

serviceWorker.unregister();
