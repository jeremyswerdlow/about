import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.dark.css';
import 'fontsource-roboto';
import "fontsource-roboto-mono";

import App from './App';
import { NotFoundPage } from './NotFoundPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/about">
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
