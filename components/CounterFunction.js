import React,{useState} from "react";
function CounterFunction(){
  const[count, setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }

    return(
        <div>
            <h1>Counter with function</h1>
            <button onClick={increment}> increment</button>
            <button onClick={decrement}> decrement</button>

            <h1>Count:{count}</h1>
        </div>
    )

}
export default CounterFunction