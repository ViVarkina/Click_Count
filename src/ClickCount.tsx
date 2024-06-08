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

            <div className={"allContainerElem"}>
                <div className={"countContainer"}>
                    <span className={"count"}>{count}</span>
                    <div>
                        <button onClick={resetCount} className={"buttonCount"}>res</button>
                        <button onClick={addToCount} disabled={count>=startMaxValue} className={"buttonCount"}>+</button>
                    </div>
                </div>
                <div className={"settingsCountContainer"}>
                    <input  className={"inputCount buttonCount"} type={"number"} placeholder={"max value"} value={startMaxValue} onChange={(e) => {
                        setvalue(Number(e.currentTarget.value))
                        console.log(e.currentTarget.value)
                    }}/>
                    <input className={"inputCount buttonCount"} type={"number"} placeholder={"step value"} value={startStepValue} onChange={(e) => {
                        setStepvalue(Number(e.currentTarget.value))
                        console.log(e.currentTarget.value)
                    }}/>
                    <button className={"buttonCount"}>save</button>
                </div>
            </div>
        </>
    )
}

export default App