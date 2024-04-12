import React from 'react'

export default function Cursor({e}) {
    
  return (
    <div>
    <div style={{
        
        transform: `translateX(${e[1]?.cursor?.x}px) translateY(${e[1]?.cursor?.y}px)`,
        position:'absolute',
        top:'0',
        left:'0'
      }}
      >
      <img width='20px' height='20px' src="https://www.svgrepo.com/show/378589/cursor.svg" alt="" />
      <p>{e[1].message}</p>
    </div>
    </div>
  )
}
