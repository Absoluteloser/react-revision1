import { useState } from "react"

const Other1 = () => {
    const [clicks, setclicks] = useState(
        { left: 0, right: 0 }
    )
    const [allClicks,setallClicks]=useState<string[]>([])
    const handleLeftClick = () => {
        // const newclicks = {
        //     left: clicks.left + 1,
        //     right: clicks.right
        // }
        const newclicks={
            ...clicks,left:clicks.left+1
        }
        setclicks(newclicks)
        // setallClicks(allClicks.push('L'))
        //the above code wont work because push method returns the new length of an array
        setallClicks([...allClicks,'L'])
        //other method is setallClcicks(allClicks.concat('L'))
    }
    const handleRightClicks = () => {
        // const newclicks = {
        //     left: clicks.left,
        //     right: clicks.right + 1
        // }
        const newclicks={
            ...clicks,right:clicks.right+1
        }
        setclicks(newclicks)
        setallClicks([...allClicks,'R'])
    }
    return (
        <div>
            <div>{clicks.left} and {clicks.right}</div>
            <button onClick={handleLeftClick}>Left</button>
            <button onClick={handleRightClicks}>Right</button>
            {
                allClicks.map((elem,index)=>{
                    return <p key={index}>
                        {
                            elem==='L'?`left count :${clicks.left}`:`right count :${clicks.right}`
                        }
                    </p>
                })
            }
        </div>
    )
}

export default Other1
//usestate initializes the object
//clicks is the object initialized