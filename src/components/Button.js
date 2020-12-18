import React from 'react'

export default function Button(props) {
  const handleClick = (name) => {
    console.log('Clicked by', name)
  }
  return (
    <button
      onClick={() => {
        handleClick(props.name)
      }}
    >
      {props.name}
    </button>
  )
}
