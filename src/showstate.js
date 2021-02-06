import React, {useState} from "react";

function Kustate(){
  const [isRed, setRed] = useState(false);
  const[count, setCount]= useState(0);
  const increment = () =>{
    setCount(count + 1);
    setRed(!isRed);
  };
  return (
    <div className= 'sss'>
    <h1 className={isRed ? "red" : ""}> changing colour</h1>
    <button onClick={increment }> increment</button>
    <h1>{count}</h1>
    </div>
  );
}
export default Kustate;
