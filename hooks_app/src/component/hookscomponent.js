import React, { useState , useEffect} from "react";
import DisplayComponent from './displayComponent'

const url = 'http://3.17.216.66:4000/location'

function Hookscomponent(){

    const [title] = useState('React Hooks App') 
    const [count,setCount] = useState(0)
    const [city,setCity] = useState()

    const updateCount = ()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        fetch(url,{method:'GET'})
        .then((res)=> res.json())
        .then((data) =>{
            setCity(data)
        })
        console.log(city)
    },[count])

    return(
        <>
        <h1> {title}</h1>
        <h1> {count}</h1>
        <button onClick={updateCount}>Counter</button>
        <DisplayComponent myCity={city}/>
        </>

    )
}

export default  Hookscomponent;