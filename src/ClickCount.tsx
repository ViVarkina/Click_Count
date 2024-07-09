import './App.css'
import {useState} from "react";
import css from "./ClickCount.module.css"
// import clsx from 'clsx';
function App(){
    const [count, setCount] = useState<number>(0)

    const[startMaxValue,setvalue]=useState<number>(0)
    const[startStepValue,setStepvalue]=useState<number>(0)


    const [settings, setSettings]=useState<{maxValue:number, stepValue:number}|undefined>(undefined)

    function saveSettings(){
        setSettings({maxValue: startMaxValue, stepValue:startStepValue})
    }

    function addToCount(){
        if(!settings){
            setCount(count+1)
        }
        else {
            if(settings.maxValue>count && settings.stepValue+count<=settings.maxValue){
                setCount(count+settings.stepValue)
            }
            else{
                alert("Шаг больше чем значение, больше мы прибавить не сможем")
            }
        }
    }

    function resetCount(){
        setCount(0)
    }


    return(
        <>
            <div className={css.allContainerElem}>
                <div className={css.countContainer}>
                    <span className={settings?.maxValue<=count ?css.countRed :css.count}>{count}</span>
                    <div>
                        <button onClick={resetCount} className={css.buttonCount}>res</button>
                        <button onClick={addToCount} className={css.buttonCount}>+</button>
                    </div>
                </div>
                <div className={css.settingsCountContainer}>
                    <span>Max value</span>
                    <input className={"inputCount buttonCount"} type={"number"} placeholder={"max value"}
                           value={startMaxValue} onChange={(e) => {
                        setvalue(Number(e.currentTarget.value))
                    }}/>
                    <span>Step value</span>
                    <input className={"inputCount buttonCount"} type={"number"} placeholder={"step value"}
                           value={startStepValue} onChange={(e) => {
                        setStepvalue(Number(e.currentTarget.value))
                    }}/>
                    <button className={css.buttonCount} onClick={saveSettings}>save</button>
                </div>
            </div>
        </>
    )
}

export default App