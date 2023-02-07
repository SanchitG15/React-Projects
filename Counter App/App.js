import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    
    const [num, setNum] = React.useState(0)
    
    function handleClickPositive(){
        setNum(num => num + 1)        
    }
    function handleClickNegative(){
        setNum(num => num - 1);
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={handleClickNegative}>–</button>
            <div className="counter--count">
                <h1>{num}</h1>
            </div>
            <button className="counter--plus" onClick={handleClickPositive}>+</button>
        </div>
    )
}
