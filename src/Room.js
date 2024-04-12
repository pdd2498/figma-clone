import {fabric} from 'fabric'
import Live from "./Live";
import React, { useCallback, useEffect, useRef, useState } from "react";
import LeftSidBar from "./component/LeftSidBar";
import RightsideBar from "./component/RightsideBar";
import {} from 'fabric'
import { handleResize, initializeFabric,handleCanvasMouseUp ,handleCanvasMouseDown, handleCanvaseMouseMove, renderCanvas, handleCanvasObjectModified } from './assets/lib/canvas';
import { useMutation, useStorage } from './liveblocks.config';
import Navbar from './component/new_components/Navbar';
import LeftSidebar from './component/new_components/LeftSidebar';





export function Room() {

  const [work , setWork] = useState('rectangle')
  
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef(null);
  const selectedShapeRef = useRef(null);
  const activeObjectRef = useRef(0);
  const imageInputRef = useRef(null);
  const [activeElement, setActiveElement] = useState({
    name: "",
    value: "",
    icon: "",
  });

  if(work === 'deleteAll')deleteAll()
  else selectedShapeRef.current = work;

 

  const deleteAll = useMutation(({storage})=>{
    const canvasObjects = storage.get('canvasObjects')

    if(!canvasObjects || canvasObjects.size===0)return true;

    for(const [key , value] of canvasObjects.entries()){
      canvasObjects.delete(key)
    }
    return canvasObjects.size === 0;

  } , [])

  const canvasObjects = useStorage((e) => e.canvasObjects);

  const syncShapeInStorage = useMutation(({storage} , object) => {
        if(!object)return;

        const { objectId } = object

        const shapeData = object.toJSON();
        shapeData.objectId = objectId;

        const canvasObjects = storage.get('canvasObjects');

        canvasObjects.set(objectId , shapeData);
  } , [])


  useEffect(()=>{
    const canvas = initializeFabric({canvasRef, fabricRef})


    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        selectedShapeRef,
        isDrawing,
        shapeRef,
      });
    });

    canvas.on("mouse:move", (options) => {
      handleCanvaseMouseMove({
        options,
        canvas,
        selectedShapeRef,
        isDrawing,
        shapeRef,
        syncShapeInStorage
      });
    });

    canvas.on("mouse:up", (options) => {
      handleCanvasMouseUp({
        canvas,
        selectedShapeRef,
        isDrawing,
        shapeRef,
        syncShapeInStorage,
        setActiveElement,
        activeObjectRef
      });
    });

    canvas.on("object:modified", (options) => {
      handleCanvasObjectModified({
        options,
        syncShapeInStorage,
      });
    });

    window.addEventListener("resize" , ()=>{
      handleResize({fabricRef})
    })
    return () =>{
      canvas.dispose();
    }
  },[work])

  useEffect(()=>{
      renderCanvas({
        fabricRef,
        canvasObjects,
        activeObjectRef
      })
  },[canvasObjects])

  return(
    <div className=" h-full flex-row">
      <button style={{
        right:'31rem'
      }} className='absolute top-7' onClick={() =>{
              fabricRef.current?.clear()
              deleteAll()
      }}>
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
      <Navbar setWork={setWork}  work={work}/>
      <div className="flex align-middle justify-center ">
          <LeftSidebar allShapes={Array.from(canvasObjects)}  />
          <Live canvasRef={canvasRef} />
        
      </div>
    </div>
    )
}