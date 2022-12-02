import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderSummary = () =>{
    const Navigate =useNavigate()
    
    return(
    <> 
      <div>Order Confirmed!!</div>
      <button onClick={ () =>Navigate(-1)}>Go back</button>
      </>
    )
}
