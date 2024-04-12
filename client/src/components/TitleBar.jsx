import React from 'react'
import "./TitleBar.css"

export const TitleBar = (props) => {
  return (
    <div className="titleBar">{props.title}</div>
  )
}
