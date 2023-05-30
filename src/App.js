import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleGamePlay = (index) => {
    // alert{index}
    let updatedBoard = [...squares]
    updatedBoard[index] = "X"
    setSquares(updatedBoard)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameBoard'>
      {squares.map((value, index) => {
        return (
          <Square
          key={index}
          value={value}
          index={index}
          handleGamePlay={handleGamePlay}
          />
        )
      })}
      </div>
    </>
  )
}


export default App