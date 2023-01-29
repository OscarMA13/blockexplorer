import React from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';





function BlockInfo({block}) {
  const blockNumber = block.number


  const history = useHistory();
  console.log(blockNumber)
  const handleClick = () => {

   history.push("/transaction")

  }

    return (
    <Link to={{pathname: '/transaction', state: { blockNumber: blockNumber }}} onClick={() => handleClick()}>
      <div className="block-info">
      <div>Number: {block.number}</div>
        <br></br>
        <div>Hash: {block.hash}</div>
        <br></br>
        <div>Parent Hash: {block.parentHash}</div>
        <br></br>
        <div>Transactions Root: {block.transactions ? block.transactions[0] : ''}</div>
        <br></br>
        <div>Miner: {block.miner}</div>
        <br></br>
        <div>Nonce: {block.nonce}</div>
        
      </div>
      </Link>
    );
  }

export default BlockInfo;