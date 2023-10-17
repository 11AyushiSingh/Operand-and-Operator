import React, { useState }from "react"; 

function Div(){
    
    const[num3, setNum3] = useState(0);
    const [num4, setNum4] = useState(0);
    const [result, setResult] = useState(0);

    function handleAdd(){
        const div = num3/num4;
        setResult(div);
    }

    return(
        <>
        <input type="number" value={num3} onChange={(e) =>setNum3(Number(e.target.value))} placeholder="Enter a no"/>
        <input type="number" value={num4} onChange={(e) =>setNum4(Number(e.target.value))} placeholder="Enter a no"/>
        <button onClick={handleAdd}>Div</button>
        <p>Result = {result}</p>
        </>
    );
}
export default Div;