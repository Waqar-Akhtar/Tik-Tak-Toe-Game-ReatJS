import React from 'react'
import { useState } from 'react'
import Squre from './Squre'

const Board = () => {
    const array = ["","","","","","","","",""]
    const [status, setStatus] = useState(array)
    const [isX, setIsX] = useState(true)

    const handleclick = (i) =>{
        // const copyArray = [...status]
        status[i]= isX ? 'X' : 'O'
        setStatus( status)
        setIsX(!isX)
}

    const winnerLogic = ()=>{
        const winnerpos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let logic of winnerpos ){
            const [a,b,c]= logic
            if( status[a]!== "" && status[a]=== status[b] && status[a]=== status[c]){
                return status[a] 
            }

        }
        return false 
    }
    const checkwinner = winnerLogic()
  return (
    <>
      { checkwinner ? `${checkwinner} is the Winner` : 
      <div className="board-container">
        <div className="row">
            <Squre onclick = {()=>handleclick(0)} value ={status[0]}/>
            <Squre onclick = {()=>handleclick(1)} value ={status[1]}/>
            <Squre onclick = {()=>handleclick(2)} value ={status[2]} />
        </div>
        <div className="row">
            <Squre onclick = {()=>handleclick(3)} value ={status[3]} />
            <Squre onclick = {()=>handleclick(4)} value ={status[4]} />
            <Squre onclick = {()=>handleclick(5)} value ={status[5]}/>
        </div>
        <div className="row">
            <Squre onclick = {()=>handleclick(6)} value ={status[6]} />
            <Squre onclick = {()=>handleclick(7)} value ={status[7]} />
            <Squre onclick = {()=>handleclick(8)} value ={status[8]}/>
        </div>
      </div>}
    </>
  )
}

export default Board
