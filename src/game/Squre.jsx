import React from 'react'

const Squre = (props) => {
  return (
    <>
        <div onClick={props.onclick} className="squre" >
            <h1>{props.value}</h1>
        </div> 
    </>
  )
}

export default Squre
