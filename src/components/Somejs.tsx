
interface Note{
    id:number,
    content:string,
    important:boolean
}
const notes:Note[]=[
    {
        id:1,
        content:'HTML is easy',
        important:true
    },
    {
        id:2,
        content:'Browser can execute only Javascript',
        important:false
    },
    {
        id:3,
        content:'GET and POST are the most important methods of HTTP protocol',
        important:true
    }
]
const Somejs = () => {
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

export default Somejs