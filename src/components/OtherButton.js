import React from 'react'

export default function OtherButton(props) {
  const handleClick = (name) => {
    console.log('Clicked by', name)
  }
  return (
    <button
      onClick={() => {
        handleClick(props.children)
      }}
    >
      {props.children}
    </button>
  )
}
