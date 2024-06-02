import {ChangeEvent, useState} from "react";

interface ResultType{
    name: string,
    age: number,
    subscribe:boolean
    agreement:boolean
}

const  INITIAL_VALUE: ResultType={
    name : "",
    age: 10,
    subscribe:false,
    agreement:false,

}
export const Settings=()=>{

    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>(18)
    const [subscribe, setSubscribe] = useState<boolean>(false)
    const [agreement, setAgreement] = useState<boolean>(false)

    const [result, setResult] = useState<ResultType|undefined>(undefined)

    const setOnlineResult=(key: keyof ResultType, value:number|string|boolean)=>{
        setResult((prevState)=>{
            return prevState ? {...prevState, [key]: value} : {
                ...INITIAL_VALUE, [key]:value
            }})
    }
    const onChangeName = (event:ChangeEvent<HTMLInputElement>)=>{
        // onClearResult()
        setName(event.target.value)
        setOnlineResult("name", event.target.value)
    }
    const onChangeAge = (event:ChangeEvent<HTMLInputElement>)=>{
        // onClearResult()
        if(Number(event.target.value) >=0 && Number(event.target.value) <100){
            setAge(Number(event.target.value))
            setOnlineResult("age", Number(event.target.value))
        }
    }

    const onChangeSubscribe=(event:ChangeEvent<HTMLInputElement>)=>{
        // onClearResult()
        setSubscribe(event.target.checked)
        setOnlineResult("subscribe", event.target.checked)
    }
    const onChangeAgreement=(event:ChangeEvent<HTMLInputElement>)=>{
        // onClearResult()
        setAgreement(event.target.checked)
        setOnlineResult("agreement", event.target.checked)
    }

    const onClickSubscribeButton=()=>{
        const data: ResultType={
            name:name,
            age: age,
            subscribe: subscribe,
            agreement: agreement
        }
        console.log("Данный отправленны", data)
    }

    const onClearResult=()=>{
        if (result){
            setResult(undefined)
        }
    }


    return <div>
        <input placeholder={"name"} value={name} onChange={onChangeName}/>
        <input type={"number"} placeholder={"age"} value={age} onChange={onChangeAge}/>
        <div>
            <input type={"checkbox"} checked={subscribe} onChange={onChangeSubscribe}/>Согласен на подписку
            <input type={"checkbox"} checked={agreement} onChange={onChangeAgreement}/>Согласен на передачу персональных данных
        </div>
        <button disabled={!(Boolean(name) && !!age && subscribe && agreement )}
                onClick={onClickSubscribeButton}>Подписаться
        </button>
        {
            result &&<div>
                <div>Имя :{result.name}</div>
                <div>Возраст :{result.age}</div>
                <div>Согласен с подпиской :{result.subscribe ? "Да":"Нет"}</div>
                <div>Согласен с передачей ПД :{result.agreement ? "Да":"Нет"}</div>
            </div>
        }
    </div>
}
