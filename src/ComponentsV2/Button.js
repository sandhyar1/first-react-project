import React from 'react'

function Button({handleClick,children}) {
    console.log('Rendering button',children)
  return (
    <Button onClick={handleClick}>
    {children}</Button>
  )
}

export default React.memo(Button)