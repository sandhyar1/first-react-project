import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
         username: '',
         comments: '',
         topic: ''
        
}
  }
  handleUsernameChange= (e) =>{
    this.setState({
        username : e.target.value
    })
}
    // eslint-disable-next-line no-undef
    handleCommentChange =(e) =>{
        this.setState({
            comments:e.target.value
        })
    }
        handleTopicChange = (e) =>{
            this.setState({
                topic :e.target.value
            })
        }
handleSubmit = (e) =>{
   alert(`${this.state.username} ${this.state.comments}  ${this.state.topic}`)
 }

render() {
    return (
        <form onSubmit={this.handleSubmit}>
      <div>
      <label>Username</label>
      <input type='text' value ={this.state.username} onChange={this.handleUsernameChange}></input>
      </div>
      <div>
      <label>comments</label>
      <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
      </div>
      <div>
      <label>Topic</label>
      <select value={this.state.topic} onChange={this.handleTopicChange}> 
      <option value="react">React</option>
      <option value="Angular">Angular</option>
      <option value="Vue">Vue</option>
      </select>
      </div>
      <button type="Submit">Submit</button>
      </form>
    )
}
}


export default Form