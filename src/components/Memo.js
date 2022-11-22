import React from 'react'

function Memo({name}) {
    console.log('render memo component')
  return (
    <div>
    {name}
    8 </div>
  )
}

export default React.memo(Memo)