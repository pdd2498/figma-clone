import Cursor from "./Cursor";
import React from 'react'
import Message from "./Message";

export default function LiveCursors({others , mess}) {


  return (
    <div >
      {/* <p>I am  LiveCursor</p> */}
      {
        others?.map((e) =>{
          
          return(
            <div>
                {/* <p>ha bhai ha</p> */}
                <Cursor key={e} e = {e} />
                {/* <Message key={e} e = {e} /> */}
            </div>
            
          )
        })
      }
    </div>
  )
}
