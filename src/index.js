import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,BrowserRouter, Switch}  from 'react-router-dom';
import GasEstimator from './components/GasEstimator';
import BlockInfo from './components/Blockinfo';
import ChainList from './components/ChainList';
import Transaction from './components/TransactionInfo';
import TransactionDetail from './components/TransactionDetails';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/gasestimator" component={GasEstimator} />
    <Route path="/chain" component={ChainList}/>
    <Route path="/transaction" component={Transaction}/>
    <Route path="/details" component={TransactionDetail}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();