import React, { useState }from "react"; 

function Mul(){
    
    const[num5, setNum5] = useState(0);
    const [num6, setNum6] = useState(0);
    const [result, setResult] = useState(0);

    function handleAdd(){
        const mul = num5*num6;
        setResult(mul);
    }

    return(
        <>
        <input type="number" value={num5} onChange={(e) =>setNum5(Number(e.target.value))} placeholder="Enter a no"/>
        <input type="number" value={num6} onChange={(e) =>setNum6(Number(e.target.value))} placeholder="Enter a no"/>
        <button onClick={handleAdd}>Mul</button>
        <p>Result = {result}</p>
        </>
    );
}
export default Mul;