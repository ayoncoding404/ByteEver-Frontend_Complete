import React from 'react'
import button from '../Assets/Buttonborder.svg'
import buttonR from '../Assets/Buttonborder_red.svg'

const Button = () => {
  return (
    <div>
     <img src={button} />
    </div>
  )
}

const ButtonRed = () => {
  return (
    <div>
     <img src={buttonR} />
    </div>
  )
}

export {Button, ButtonRed}