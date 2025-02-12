// import React, { useState } from 'react';
// import { FcMenu } from "react-icons/fc";
// import { Link } from 'react-router-dom';
// import WorkOutStatus from '../Page/WorkOutFile/WorkOutStatus';

// export default function OptionsVisible() {
//   const [isOptionsVisible, setIsOptionsVisible] = useState(false);
//   const [isParmitModel, setIsParmitModel] = useState(false);

//   const toggleOptions = () => {
//     setIsOptionsVisible(!isOptionsVisible);
//   };

//   const openParmitModel = () => {
//     setIsParmitModel(!isParmitModel);
//     setIsOptionsVisible(false); 
//   };

//   return (
//     <div className="text-lg cursor-pointer">
//       <FcMenu onClick={toggleOptions} />
//       {isOptionsVisible && (
//         <div className="absolute mt-2 w-40 p-4 bg-white shadow-lg rounded-lg select-none">
//           <ul>
//             <Link to={'/LocaOne'}>
//               <li className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">Edit</li>
//             </Link>
//             <li onClick={openParmitModel} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
//               See More
//             </li>
//             <li onClick={toggleOptions} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
//               Cancel
//             </li>
//           </ul>
//         </div>
//       )}

//       {isParmitModel && (
//         <WorkOutStatus openParmitModel={openParmitModel} />
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';
import { FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';
import WorkOutStatus from '../Page/WorkOutFile/WorkOutStatus';

export default function OptionsVisible() {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isParmitModel, setIsParmitModel] = useState(false);

  const toggleOptions = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const openParmitModel = () => {
    setIsParmitModel(!isParmitModel);
    setIsOptionsVisible(false);
  };

  return (
    <div className="text-lg cursor-pointer">
      <FcMenu onClick={toggleOptions} />
      {isOptionsVisible && (
        <div className="absolute mt-2 w-40 p-4 bg-white shadow-lg rounded-lg select-none">
          <ul>
            <Link to={'/LocaOne'}>
            <li className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">Edit</li>
            </Link>
            <li onClick={openParmitModel} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
              အလုပ်ထွက်
            </li>
            <li onClick={toggleOptions} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
              Cancel
            </li>
          </ul>
        </div>
      )}

      {isParmitModel && (
        <WorkOutStatus openParmitModel={openParmitModel}/>
      )}
    </div>
  );
}