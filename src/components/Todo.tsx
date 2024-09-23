import { useState} from "react"
const Todo = () => {
    const [todo,settodo]=useState<string[]>([])
    const [task,settask]=useState("")
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        settask(event.target.value)
    }
    const clearall=()=>{
        settask("")
        settodo([])
    }
    const handleAddTask=()=>{
        if(task){
            settask("")
            settodo([...todo,task])
        }
    }
  return (
    <div>
        <h1>TO DO APP</h1>
        <input type="text" value={task} onChange={handleInputChange} placeholder="Enter the task" />
        <button onClick={handleAddTask}>ADD THE TASKS IN THE TO DO APP</button>
        <button onClick={clearall}>CLEAR ALL THE TASKS</button>
        <div>
            {
                todo.map((task,index)=>{
                    return (
                        <p key={index}>{task}</p>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Todo