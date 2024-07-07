import './App.css'
import {useState} from "react";
function App(){
    const [count, setCount] = useState<number>(0)

    const[startMaxValue,setvalue]=useState<number>(0)
    const[startStepValue,setStepvalue]=useState<number>(0)

    const [settings, setSettings]=useState<{maxValue:number, stepValue:number}|undefined>(undefined)

    function saveSettings(){
        setSettings({maxValue: startMaxValue, stepValue:startStepValue})
    }

    function addToCount(){
        console.log(settings)
        if(!settings){
            setCount(count+1)
        }
        else {
            if(settings.maxValue>count && settings.stepValue+count<=settings.maxValue){
                setCount(count+settings.stepValue)
            }

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
                    {/*сделать класс на изменения цвета*/}
                    <div>
                        <button onClick={resetCount} className={"buttonCount"}>res</button>
                        <button onClick={addToCount} className={"buttonCount"}>+</button>
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
                    <button className={"buttonCount"} onClick={saveSettings}>save</button>
                </div>
            </div>
        </>
    )
}

export default App