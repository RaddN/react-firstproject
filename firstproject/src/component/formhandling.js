import React, { Component } from 'react'
import '../style/style.css'
export default class Formhandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      name:'we can put a default value or old info',
      language:'Dart'
    }
  }
  
  handleInput=(event)=>{
    this.setState({
      user:event.target.value
    })
  }
  handleInput2=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
handleSelect=(Event)=>{
  this.setState({
    language:Event.target.value
  })
}
handleSubmit=(event)=>{
  //with preventDefault the form will submit data without reloading
  event.preventDefault()
  alert(`inputted user: ${this.state.user} \n inputted language: ${this.state.language}`)
}
  render() {
    return (
      <div className='Myform'>
        <h2>Formhandling</h2>
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" value={this.state.user} onChange={this.handleInput}/>
            <br/>
            <br/>
            <input type="text" value={this.state.name} onChange={this.handleInput2}/>
            <br/>
            <br/>
            <label>Favorite language</label>
            <select value={this.state.language} onChange={this.handleSelect}>
              <option value="Dart">Dart </option>
              <option value="C++">C++</option>
              <option value="C#">C#</option>
              <option value="Python">Python</option>
            </select>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
