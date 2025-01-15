import React, { useState } from "react";
import Sidebar from "./Component/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import { FcMenu } from "react-icons/fc";

function App() {
  const [isModel, setIsModel] = useState(true);

  return (
    <>

      <div className="fixed w-screen top-0 z-10">
        <Navbar FcMenu={<FcMenu />} setIsModel = {setIsModel}/>
      </div>

    
          <div className="flex h-screen pt-16">
            {isModel && 
              <div className="fixed top-16 left-0 h-full w-60 bg-white z-20">
                <Sidebar />
              </div>
            }


            <div className="ml-60 bg-slate-100 w-screen max-h-screen overflow-y-auto">
              <Outlet />
            </div>
      </div>
    </>
  );
}

export default App;
