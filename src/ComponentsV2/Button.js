import React from 'react'

function Button({handleClick,children}) {
    console.log('REndering button',children)
  return (
    <Button onClick={handleClick}>
    {children}</Button>
  )
}

export default Button