/* const greet = require("./Greeter.js");
document.querySelector("#root").appendChild(greet()); */

import React from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';
import './main.css';

ReactDOM.render(
<Greeter/>,
document.getElementById('root')
);

    //"build": "NODE_ENV=production webpack --config ./webpack.production.config.js --progress"
    // "build": "set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress"