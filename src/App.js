import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <CoinCap></CoinCap>
    </div>
  );
}


function CoinCap(){

  const [coins, setCoin] = useState(0)

  const addHandle = () =>{
      const newCoin = coins + 1;
      setCoin(newCoin);
  }
  const addHandle2 = () =>{
      const newCoin = coins -1;
      setCoin(newCoin);
  }
  return (
    <div className='division'>
      <h1 className='title'>CoinCap Game</h1>
      <h3 className='custom'>{coins}</h3>
      <button className='button' onClick={addHandle}>Add Coin</button> 
      <button className='button' onClick={addHandle2}>Gift Coin</button>
    </div>
  )
}

export default App;
