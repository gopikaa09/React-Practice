// import { useReducer, useState } from "react"


// const reducerFunction=(state,action)=>{
//      switch(action.type){
//         case "ADD_TASK":
//             return {
//                 tasks:[...state.tasks,action.payload]
//             }
//         case "REMOVE_TASK":
//             return{
//                 tasks:state.tasks.filter((val)=>val.id!==action.payload)
//             }
//         default:
//             return state
//      }
// }



// const ToDolist=()=>{
//     const[inputvalue,setInputvalue]=useState("")
//     const intialValue={
//         tasks:[]
//     }
//     const[currentValue,dispatch]=useReducer(reducerFunction,intialValue);

   
//     const handleTaskAdd=()=>{
 
//         dispatch(
//             {
//                 type:"ADD_TASK",
//                 payload:inputvalue
//             }
//         )
//         setInputvalue("")
//     }
//     const RemoveTask=(taskId)=>{
//         dispatch(
//             {
//                 type:"REMOVE_TASK",
//                 payload:taskId
//             }
//         )
//     }


//     return(
//         <div>
//         <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}></input>
//         <button onClick={handleTaskAdd}>Add task</button>
//         <ul>
//         {
//             currentValue.tasks.map((val,ind)=>{
//                 return (
//                    <div key={val.id}>
//                    <li>{val}</li>
//                    <button onClick={()=>RemoveTask(val.id)}>Remove</button>
//                    </div>
//                 )

//             })
//         }
//         </ul>
//         </div>
//     )
// }
// export default ToDolist


import React, { useReducer, useState } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, { id: Date.now(), text: action.payload }],
      };
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const ToDolist = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentValue, dispatch] = useReducer(reducerFunction, { tasks: [] });

  const handleTaskAdd = () => {
  
      dispatch({ type: "ADD_TASK", payload: inputValue });
      setInputValue("");
    
  };

  const handleTaskRemove = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleTaskAdd}>Add task</button>
      <ul>
        {currentValue.tasks.map((task) => (
          <div key={task.id}>
            <li>{task.text}</li>
            <button onClick={() => handleTaskRemove(task.id)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDolist;
