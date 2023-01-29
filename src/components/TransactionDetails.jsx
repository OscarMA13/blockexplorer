import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };

const alchemy = new Alchemy(settings);




function TransactionDetail(hash){
   const transactionHash = hash.location.state.hash

   const [transactionDetail,setTransactionDetail] = useState([]);


    useEffect(()=>{

        async function getTransactionDetail(transactionHash) {
          setTransactionDetail(await alchemy.core.getTransactionReceipt(transactionHash));
        }

        getTransactionDetail(transactionHash)
      },[])
      console.log('TransactionDetail')
      //console.log(transactionDetail)
      console.log(transactionDetail.blockNumber)
      const blockNumber = transactionDetail.blockNumber;

    return(
       <> <div>
        <div className='TransactionInfo'>
        
       <h1>TransactionDetail</h1>
       <div>Number: {transactionDetail.blockNumber}</div>
       <div></div>
        <div>Hash: {transactionDetail.blockHash}</div>
        <div></div>
       <div>Parent Hash: {transactionDetail.contractAddress}</div>
       <div></div>
       <div>State Root: {transactionDetail.to}</div>
       <div></div>
       <div>Miner: {transactionDetail.transactionIndex}</div>
       <div>Nonce: {transactionDetail.nonce}</div> 
       <div></div>
       <div></div>
       </div>
       </div>
         <div className='nav'>
         <NavLink to="/">MAIN</NavLink>
         <NavLink to={{pathname: '/gasestimator',
                   state: { blockNumber: blockNumber }}
                   }>GAS</NavLink>
        <NavLink to={{pathname: '/chain',
                     state: { blockNumber: blockNumber }}
                    }>CHAIN</NavLink>
         </div>

       </> );
}

export default TransactionDetail;