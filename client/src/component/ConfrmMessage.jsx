// simport icons
import { useEffect } from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircleOutline } from "react-icons/io";
import { RiLoader3Line } from "react-icons/ri";

import { useStateContext } from "../Contexts/ContextProvider";

function ConfrmMessage({ message }) {
  const { confirmmsg } = useStateContext();

  return (
    <div
      className={`absolute top-0 right-0 z-50 mx-2 my-4  bg-white dark:bg-[#1C252E] w-fit  h-fit rounded-lg p-[6px] [box-shadow:rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
        confirmmsg ? "animate-fade" : ""
      }`}
    >
      <div className="flex flex-row items-start">
        <div className="flex flex-row items-center">
          <span className="p-2 bg-[#EEFAF2] dark:bg-[#1D3131] text-[#22C55E] block rounded-lg  ">
            {message ? (
              <IoIosCheckmarkCircle />
            ) : (
              <RiLoader3Line className="animate-spin" />
            )}
          </span>
          <p className="text-gray-700 text-[13px]   pr-20 pl-2 font-semibold">
            {message ? message : "Loading..."}
          </p>
        </div>
        <div className="text-gray-600 text-lg   flex items-start justify-start px-1  cursor-pointer hover:text-slate-400 transition">
          <IoIosCloseCircleOutline />
        </div>
      </div>
    </div>
  );
}

export default ConfrmMessage;
