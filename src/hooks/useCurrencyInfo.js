import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        const base=currency.toLowerCase()
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[base]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;