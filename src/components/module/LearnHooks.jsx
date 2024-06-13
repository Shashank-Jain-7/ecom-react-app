import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';



const LearnHooks = () => {
    const btnRef = useRef()
 const [count,setCount]=useState(0);
 useEffect(() => {
    console.log(count);
 }, [count]);

    return<div><Button style={{display:"none"}} ref={btnRef} onClick={() => setCount((prev) => prev+1)}>Increment Count</Button>
    <br />
    <br />
    <Button onClick={() => {btnRef.current.click()
        btnRef.current.style.display = "block"
    }}>Trigger Count</Button></div>
  
};

export default LearnHooks;
