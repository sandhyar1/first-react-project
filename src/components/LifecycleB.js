import React, { Component } from 'react'

export class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'sandhya'
    }
    console.log('LifecycleB constructor');
  }
  static getDerivedStateFromProps(props,state){
    console.log('lifecycleB getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate(){
    console.log("lifecycleB shouldcomponent")
    return true
   }
   getSnapshotBeforeUpdate(prevProps,prevState){
   console.log('LifecycleB getsnapshot Before update')
   return null;
   }
   componentDidUpdate(){
    console.log('LifecycleB ComponentDidUpdate');
   }
  componentDidMount(){
    console.log('Lifecycle-B didmount')
  }
  
  render() {
      console.log('Lifecycle-B render')
    return  <div>Lifecycle-b</div>
  }
}

export default LifecycleB