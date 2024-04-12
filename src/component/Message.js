import React from 'react'

export default function Message({e , mess , setMess , updateMyPresence}) {

    function handleChange(e){
        updateMyPresence({ message: e.target.value });
        setMess(e.target.value)
    }
    function handleKeyDown(){
        const a = document.getElementById('kya');
        
    }

    return (
        <div>
            <div style={{
                
                transform: `translateX(${e?.x}px) translateY(${e?.y}px)`,
                position:'absolute',
                top:'0',
                left:'0'
            }}
            >
            <input id='kya' type="text" style={{backgroundColor:"blue"}}
             className="z-10 w-60 border-none	bg-transparent text-white placeholder-blue-300 outline-none"
              autoFocus ={true}
              onChange={(e) => handleChange(e)}
              value={mess}
              maxLength={50} />
            </div>
        </div>
    )
}
