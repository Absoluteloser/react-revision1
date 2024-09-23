interface CounterProps{
    //now empty as no props are sent here
}
import { useState,useEffect } from 'react'
const Counter:React.FC<CounterProps> = () => {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        const timeoutId=setTimeout(() => {
            setcount(count=>count+1)
        }, 1000);
        return ()=>{
            clearInterval(timeoutId)
        }
    },[])
  return (
    <div>
        {count}
    </div>
  )
}

export default Counter