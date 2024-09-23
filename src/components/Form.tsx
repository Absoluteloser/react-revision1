import { useState } from "react"

const Form = () => {
    const [notes,setnotes]=useState([])
    const addNote=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(event.target,"button clicked")
    }
  return (
    <div>
        <h1>Form</h1>
        {
            notes.map((note)=>{
                return (
                    <p>{note}</p>
                )
            })
        }
        <h1>NOTES</h1>
        <form action="" onSubmit={addNote}>
            <input type="text" />
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}

export default Form