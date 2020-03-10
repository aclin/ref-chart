import React from 'react';
import ReactDOM from 'react-dom';

import {RefApp} from './app';


ReactDOM.render(
  <RefApp/>,
  document.getElementById('app')
);

module.hot.accept();
