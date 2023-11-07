import React, { useState } from "react";
import cirlestyle from './circle.module.css'
function Circle() {
  const [Circle, setCircle] = useState(0);
  const[colour,setColour]=useState(false)
  const handleCircle = () => {
    setCircle(Circle + 1);
  };
  let handlenumbers = () => {
    let b = [];
    for (let i = 1; i < Circle; i++) {
      b.push(i);
    }
    return b;
  };

  const colourChange=()=>{
    if(colour){
        setColour(true)
    }else{
        setColour(false)
    }
  }
  return (
    <div>
      <button onClick={() => handleCircle()}>Click me</button>
      <div className={cirlestyle.container}>
      {handlenumbers().map((val) => {
        return (
          colour ? <div className={cirlestyle.circles} style={{backgroundColor:"red"}} onClick={colourChange}>
          <h1>{val}</h1>
        </div> : <div className={cirlestyle.circles} style={{backgroundColor:"blue"}} onClick={colourChange}>
        <h1>{val}</h1>
      </div>
        );

      })}</div>
    </div>
  );
}

export default Circle;


// import React from 'react'

// function Circle() {
//   return (
//     <div>
//       <h1>Gopika</h1>
//     </div>
//   )
// }

// export default Circle
