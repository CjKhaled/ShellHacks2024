import React from 'react'
import { PiPlusBold } from "react-icons/pi";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black">
      <div className="flex flex-row items-center w-full">
        <div className="h-48 bg-white flex-grow mt-72"></div>
        <div className="flex items-center justify-center rounded-full h-48 w-48 mt-72 bg-white mx-4">
          <PiPlusBold fontSize={"48px"} fontWeight={"bolder"} />
        </div>
        <div className="h-48 bg-white flex-grow mt-72 rotate-45"></div>
      </div>
    </div>
  );
}

export default page