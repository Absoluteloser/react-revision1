interface NoteProps{
    notes:Note[],
}
interface Note{
    id:number,
    content:string,
    important:boolean
}
const Somejs1:React.FC<NoteProps> = ({notes}) =>{
  return (
    <div>
        {
            notes.map((note)=>{
                return (
                    <li key={note.id}> {note.content}</li>
                )
            })
        }
    </div>
  )
}

export default Somejs1