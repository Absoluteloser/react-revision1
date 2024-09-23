interface HelloProps{
    name:string;
    age:number
}
const Hello:React.FC<HelloProps> = ({name,age}) => {
    // const bornYear=()=>{
    //     const yearnow=new Date().getFullYear()
    //     return yearnow-props.age
    // }
    const bornYear=()=>new Date().getFullYear()-age
  return (
    <div>
        <p>Hello {name} you are {age} years old</p>
        <p>You were born in {bornYear()}</p>
    </div>
  )
}

export default Hello