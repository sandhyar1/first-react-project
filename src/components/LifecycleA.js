import React, { Component } from 'react'
import LifecycleB from './components/LifecycleB';

export class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'sandhya'
    }
    console.log('LifecycleA constructor');
  }
  static getDerivedStateFromProps(props,state){
    console.log('lifecycleA getDerivedStateFromProps');
    return null;
  }

  componentDidMount(){
    console.log('Lifecycle-a didmount')
  }
 shouldComponentUpdate(){
  console.log("lifecycleA shouldcomponent")
  return true
 }
 getSnapshotBeforeUpdate(prevProps,prevState){
 console.log('LifecycleA getsnapshot Before update')
 return null
 }
 componentDidUpdate(){
  console.log('LifecycleA ComponentDidUpdate');
 }
 changeState =() =>{
  this.setState({
    name:'lifecycle methods'
  })
 }
  
  render() {
      console.log('LifecycleA render')
      return(
        <div>
      <div>Lifecycle-A</div>
      <button onClick={this.changeState}>Change State</button> 
      <LifecycleB />
      </div>
      )
  }
}

export default LifecycleA