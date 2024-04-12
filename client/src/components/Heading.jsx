import React from 'react'
import "./Heading.css"

export const Heading = (props) => {
  return (
    <div className="heading">
      <div></div>
      {props.text}
    </div>
  )
}
