import { useEffect, useState,React} from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import {  Link, NavLink } from 'react-router-dom';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);



function GasEstimator(props){
  const blockNumber = props.location.state.blockNumber
 console.log(props)
  const [gasPrice, setGasPrice] = useState();

  useEffect(() => {
    alchemy.core.getGasPrice().then((data)=>{setGasPrice(data);});
}, []);

  console.log('HERE')
  console.log(blockNumber)
  console.log(gasPrice)
  console.log(gasPrice ? gasPrice._hex: '')

    return (
      <div>
        <h1 className='gasestimator'>Current Gas: {gasPrice ?parseInt(gasPrice._hex): ''}</h1>
        <div className='nav'>
        <NavLink to="/">MAIN</NavLink>
        <NavLink to={{pathname: '/gasestimator',
      state: { blockNumber: blockNumber }}}>GAS</NavLink>
      <NavLink to={{pathname: '/chain',
              state: { blockNumber: blockNumber }}
              }>CHAIN</NavLink>
        </div>
        </div>
    );
  
};

export default GasEstimator;