"use client";
import React from 'react'
import { useMyPresence, useOthers, useOthersMapped } from "./liveblocks.config";
import Cursor from "./component/Cursor";
import { useCallback, useState } from "react";
import LiveCursors from './component/LiveCursors'
import Message from "./component/Message";

export default function Live({canvasRef}) {

    const [mess , setMess] = useState('')
const [show , setShoe] = useState(false);

window.addEventListener("keyup", onKeyUp);


function onKeyUp(e){
  if(e.key === "/"){
    // alert("")
    setShoe(true);
    return
  }
  else if(e.key === "Escape"){
    setShoe(false)
    return
  }
}








const others = useOthers();
const others2 = useOthersMapped((other) => other.presence);
  
  const [ {cursor} , updateMyPresence] = useMyPresence()

  const handlePointerMove = useCallback((event) => {
      event.preventDefault();
        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
        updateMyPresence({ cursor: { x, y,}, message : ""});
      // }
    }, []);

    const handlePointerLeave = useCallback((event) => {
      event.preventDefault();
  
        updateMyPresence({ cursor: null, message: null });
    }, []);
const userCount = others.length;


  return (
    <div className='bg-slate-600'>
         <div id='canvas' onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}  style={{width:'70vw',height: '100vh'}}>

            <canvas ref={canvasRef}/>
      
      { show && (
        <Message e={cursor} mess = {mess} setMess = {setMess} updateMyPresence = {updateMyPresence}/>)}
      <LiveCursors others={others2} />
      
      {/* <div>There are {userCount} other user(s) online</div> */}
  </div>
    </div>
  )
}



