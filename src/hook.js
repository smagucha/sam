import React, {useState} from "react";
function Hookexample(){
  const[count, setCount] = useState(0)
  return (
    <div className= 'sss'>
    <h3>
    {count}
    </h3>
    <button onClick= {()=> setCount(count + 1)}>plus</button>
    <button onClick= {()=> setCount(count - 1)}>minus</button>
    </div>
  );
}
export default Hookexample;
