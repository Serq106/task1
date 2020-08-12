import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Task1 from './task1/Task1';
import Task2 from './task2/Task2';
import Task3 from './task3/Task3';
import Task4 from './task4/Task4';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Task1 />
  </React.StrictMode>,
  document.getElementById('task1')
);



ReactDOM.render(
    <React.StrictMode>
        <Task2 name='z4'/>
        <Task2 name='342'/>
    </React.StrictMode>,
    document.getElementById('task2')
);



ReactDOM.render(
    <React.StrictMode>
        <Task3 />
    </React.StrictMode>,
    document.getElementById('task3')
);
ReactDOM.render(
    <React.StrictMode>
        <Task4 name='World 4'/>
    </React.StrictMode>,
    document.getElementById('task4')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
