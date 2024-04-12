"use client";

import { RoomProvider } from "./liveblocks.config";
import { Room } from "./Room";
import { ClientSideSuspense } from "@liveblocks/react";
import './App.css';
import LiveCursors from "./component/LiveCursors";
import {LiveMap} from '@liveblocks/client'

function App() {
  return (
    <div className="App" >
      <RoomProvider id="my-room" initialPresence={{}} initialStorage={{canvasObjects: new LiveMap()}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => <Room />}
      </ClientSideSuspense>
    </RoomProvider>
    </div>
  );
}

export default App;
