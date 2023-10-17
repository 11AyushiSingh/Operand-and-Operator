import React, { useState }from "react"; 

function Sub(){
    
    const[num7, setNum7] = useState(0);
    const [num8, setNum8] = useState(0);
    const [result, setResult] = useState(0);

    function handleAdd(){
        const sub = num7-num8;
        setResult(sub);
    }

    return(
        <>
        <input type="number" value={num7} onChange={(e) =>setNum7(Number(e.target.value))} placeholder="Enter a no"/>
        <input type="number" value={num8} onChange={(e) =>setNum8(Number(e.target.value))} placeholder="Enter a no"/>
        <button onClick={handleAdd}>Sub</button>
        <p>Result = {result}</p>
        </>
    );
}
export default Sub;