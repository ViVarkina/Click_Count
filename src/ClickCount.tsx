import './App.css'
import {useState} from "react";
function App(){
    const [count, setCount] = useState<number>(0)

    const[startMaxValue,setvalue]=useState<number>(5)
    const[startStepValue,setStepvalue]=useState<number>(1)



    function addToCount(){
            if(count<startMaxValue){
                setCount(count+startStepValue)
            }
    }

    function resetCount(){
        setCount(0)
    }

    return(
        <>

            <div>
                <div>
                    <span>{count}</span>
                    <div>
                        <button onClick={resetCount}>res</button>
                        <button onClick={addToCount}>+</button>
                    </div>
                </div>
                <div>
                    <input type={"number"} placeholder={"max value"} value={startMaxValue} onChange={(e) => {
                        setvalue(Number(e.currentTarget.value))
                        console.log(e.currentTarget.value)
                    }}/>
                    <input type={"number"} placeholder={"step value"} value={startStepValue} onChange={(e) => {
                        setStepvalue(Number(e.currentTarget.value))
                        console.log(e.currentTarget.value)
                    }}/>
                    <button onClick={addToCount}>save</button>
                </div>
            </div>
        </>
    )
}

export default App