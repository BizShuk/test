import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './jsx/todo.js';

let listurl = "/test/test.json";


ReactDOM.render(<Todo source={listurl}/>,document.getElementById('todo'));
