import React, { useEffect, useMemo, useState } from 'react'

function RefrentialEqual() {

    const[num,setNum]=useState(0);

    // const obj={
    //     age:num
    // }

    const obj = useMemo( ()=>{
        return {age: num};
    } )

    useEffect(()=>
        console.log("Referential eqaulity changed....! means obj is changed even if its current value is same as current value in any value of key same goes with arrays...in js!")
    [obj]);

  return (
    <div>
        <div>{num}</div>
        <button onClick={(num)=>num+1}>Increase</button>
    </div>
  )
}

export default RefrentialEqual