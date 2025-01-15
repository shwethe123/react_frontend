import React from 'react';

export default function Navbar({FcMenu,setIsModel}) {
  const closedModel = () => {
      // setIsModel((prevState) => !prevState);
  }
  return (
    <div className="flex justify-between items-center h-16 px-6 bg-white shadow-sm border-b border-gray-900">
      
      <div className="flex items-center ">
        <div className="text-3xl mr-2 cursor-pointer" onClick={closedModel}>{FcMenu}</div>
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </div>

      
      <div className="text-center flex-grow">
        <h2 className="text-3xl font-semibold">Overview</h2>
      </div>

      
      <div className="flex items-center">
        <img 
          src="https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png" 
          alt="User Avatar" 
          width="40" 
          height="40" 
          className="rounded-full" 
        />
      </div>
    </div>
  );
}
