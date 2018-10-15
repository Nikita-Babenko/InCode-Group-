import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*import {General} from './clients';*/

ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(<general source="./clients.json" />, document.getElementById('general'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
