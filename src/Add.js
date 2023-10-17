import React, { useState }from "react";  

function Add(){

    const[num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    function handleAdd(){
        const sum = num1+num2;
        setResult(sum);
    }

    return(
        <>
        <input type="number" value={num1} onChange={(e) =>setNum1(Number(e.target.value))} placeholder="Enter a no"/>
        <input type="number" value={num2} onChange={(e) =>setNum2(Number(e.target.value))} placeholder="Enter a no"/>
        <button onClick={handleAdd}>Add</button>
        <p>Result = {result}</p>
        </>
    );

}
export default Add;