interface courseprops{
    id:number,
    name:string,
    parts:parttype[]
    course:any
}
interface parttype{
    name:string,
    exercises:number,
    id:number
}
const Somejs2:React.FC<courseprops> = ({id,name,parts,course}) => {
    
    console.log({id,name,parts,course})
  return (
    <div>
        {
            id
        }
        {
            name
        }
        {
            course[0].parts.map((part:parttype)=>(
                <p>{part.name}</p>
            ))
        }
    </div>
  )
}


export default Somejs2
//in the app.jsx we take the prop as course