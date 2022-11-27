import React,{useState,useCallback} from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'


//here we are every component we are using there when we have to increase age only age and increment age shoul render but here everycomponent re -render 
//now to optimise the code we have the solution React.memo
function ParentComponent() {
  const[age,setAge] =useState(25)
  const [salary,setSalary] =useState(50000)


  const incrementAge= useCallback(() =>{
    setAge(age+1);
  },[age])
  const incrementSalary = useCallback(() =>{
    setSalary(salary+1000)
  },[salary])
  return (
    <div>
    <Title />
    <Count text="age" count={age} />
    <Button handleClick={incrementAge}>Increment Age</Button>
    <Count text="salary" count={salary} />
    <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent