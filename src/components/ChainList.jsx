import BlockInfo from './Blockinfo';
import React from 'react';
import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { useLocation,NavLink } from 'react-router-dom';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };

const alchemy = new Alchemy(settings);


function ChainList (props) {
    console.log('THE BLOCK NUMBER IS ')
    const blockNumber = props.location.state.blockNumber;
    console.log(blockNumber)
    const fetchBlocks = async () => {
        const blockPromises = Array.from({length: 4}, (_, i) => {
            console.log('HERE'+ blockNumber - i)
            return alchemy.core.getBlock(blockNumber - i);
        });
 
        const blocksArray = await Promise.all(blockPromises);
  
        return blocksArray
    }
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        fetchBlocks().then(blocksArray => setBlocks(blocksArray));
    }, []);

    return (
        <><div>
            <h1 className='Chain-Link'>
                Last 4 Blocks
            </h1>
            <div className='blockinfo2'>
            {blocks.map((block) => {
                return <BlockInfo key={block.blockNumber} block={block} />;
            })}
            <div></div>
            </div>
        </div><div className='nav'>
                <NavLink to="/">MAIN</NavLink>
                <NavLink to={{
                    pathname: '/gasestimator',
                    state: { blockNumber: blockNumber }
                }}>GAS</NavLink>
                <NavLink to={{
                    pathname: '/chain',
                    state: { blockNumber: blockNumber }
                }}>CHAIN</NavLink>
            </div></>
           
    );
}

export default ChainList;