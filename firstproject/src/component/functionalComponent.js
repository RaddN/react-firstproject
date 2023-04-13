import React from 'react'
import '../style/style.css'
import styled from 'styled-components'
//using infile/js object css
var options = {
  backgroundColor: "purple",
  fontSize:"50px"
}
//using library function css(first way)
const Box = styled.div`
background-color:crimson;
padding: 15px;
`;

//using library function css (second way best way)
const Box2 = styled.div(
  {
    backgroundColor: 'gray',
    padding: 20

  }
)
const FunctionalComponent = ({number,person}) => {
  console.log(person);
  return (
    <div>
    <div style={{margin:"10px"}}>Hello from functional Component</div>
    <div style={options}> hello from infile style</div>
    <div className='heading'>I'm styled from style.css file</div>
    <Box>Style using library function first way</Box>
    <Box2>Style using library function second way</Box2>

    <h3>getting data using functionalComponent:<br/> My name is: {number} My name is: {person.name}</h3>
    </div>
  )
}

export default FunctionalComponent