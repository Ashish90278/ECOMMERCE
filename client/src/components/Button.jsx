import React from 'react'
import "./Button.css"

export const Button = (props) => {
  return (
    <>
    <div className="button" style={{ backgroundColor: `${props.buttonColor}`, color: `${props.textColor}`, height: `${props.height}`, width: `${props.width}`, display: `${props.display}`, alignItems: `${props.alignItems}`, justifyContent: `${props.justifyContent}`}}>{props.text}</div>
    </>
  )
}