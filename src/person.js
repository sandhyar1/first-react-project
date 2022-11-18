import React from 'react'

function person({person , key }) {
  return (
    <div>
    <h2>
      {key}  I am {person.name} .I am {person.age} years old.I am {person.skill} very well.
    </h2>
    </div>
  )
}

export default person