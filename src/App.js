import './App.css';

import React from 'react'

const numbers = [...Array(100).keys()];
// ejemplo cambio 1
// ejemplo cambio 2

const App = () => {

  return (
    <div className="App numbers">
      {numbers.map( (element, index) => {
        if((element+1)%3 === 0 && (element+1)%5 === 0) return <h1 className='green' key={index}>Fizz Buzz</h1>
        if((element+1)%3 === 0 && (element+1)%5 !== 0) return <h1 className='red' key={index}>Fizz</h1>
        if((element+1)%3 !== 0 && (element+1)%5 === 0) return <h1 className='yellow' key={index}>Buzz</h1>
        return <h1 key={index}>{element+1}</h1>
      })}
    </div>
  )
}

export default App
