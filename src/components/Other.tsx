import { useState } from "react"
const Other = () => {
    const [left, setleft] = useState(0)
    const [right, setright] = useState(0)
    const [allClicks,setallClicks]=useState([])
    const [total,settotal]=useState(0)
    const incrementleft = () => {
        // setleft(left + 1)
        // settotal(left+right)
        const newleft=left+1
        setleft(newleft)
        settotal(newleft+right)
    }
    const decrementleft = () => {
        // setleft(left - 1)
        // settotal(left+right)
        const newleft=left-1
        setleft(newleft)
        settotal(newleft+right)
    }
    const incrementright = () => {
        // setright(right + 1)
        // settotal(left+right)
        //the above lines give issue of 1 less value
        const newright=right+1
        setright(newright)
        settotal(left+newright)
    }
    const decrementright = () => {
        // setright(right - 1)
        // settotal(left+right)
        const newright=right-1
        setright(newright)
        settotal(newright+left)
    }
    return(
        <div>
            <h2>{left} and {right}</h2>
            <button>Left</button><button onClick={incrementleft}>+</button><button onClick={decrementleft}>-</button><button>Right</button><button onClick={incrementright}>+</button><button onClick={decrementright}>-</button>
            <h2>{total}</h2>
        </div>
    )
}
export default Other


//so we should first use the variable to store the udpated state and then update the state with the new value