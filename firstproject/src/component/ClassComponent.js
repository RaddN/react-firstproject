// import React from 'react';

// const ClassComponent = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ClassComponent;

import React, { Component } from 'react'

//rcc
export default class ClassComponent extends Component {
 constructor(props) {
  super(props);
  this.state = {
    message : "Hello from set state"
  }
  
 }
 handlebutton(){
  this.setState({
    message:"Thank you for clicking"
  })
 }

  
  render() {
    return (
      <div>
         <div>Hello from class component</div>
         {/* patching data through props */}
         <h3>getting data for classComponent:<br/> My name is: {this.props.name} <br/> My number is: {this.props.number}</h3>
         <h4>getting data for classComponent json format:<br/> My name is {this.props.person.name} My number is: {this.props.person.phone}</h4>
         <h3>{this.state.message}</h3>
        <button onClick={()=>this.handlebutton()}>Click me</button>
      </div>
     
    )
  }
}

