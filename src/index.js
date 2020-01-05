import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './../node_modules/bulma-extensions/bulma-accordion/dist/css/bulma-accordion.min.css';
import './../node_modules/bulma/bulma.sass';
// import App from './App';
import GoalForm from './components/GoalForm'
import GoalMap from './components/GoalMap'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GoalMap />, document.getElementById('root'));
// ReactDOM.render(<GoalForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
