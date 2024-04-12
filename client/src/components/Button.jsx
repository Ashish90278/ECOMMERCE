import React from 'react'
import "./Button.css"

export const Button = (props) => {
  return (
    <>
    <div className="button" style={{ backgroundColor: `${props.buttonColor}`, color: `${props.textColor}`}}>{props.text}</div>
    </>
  )
}