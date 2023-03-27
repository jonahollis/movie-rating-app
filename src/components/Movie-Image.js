import React from 'react'

const Image = (props) => {
  return (
    <div className="rounded-lg overflow-hidden">
    <img src={props.imgURL}></img>
    </div>
  )
}

export default Image