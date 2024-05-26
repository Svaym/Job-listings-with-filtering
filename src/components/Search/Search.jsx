import { useState } from "react";

export default function Search({position, onClick, value, onChange}) {
  return (
    // <div className="container">
      <div className={`flex items-center ${position}`}>
        <input type="text" onChange={onChange} className="py-1 w-full px-3 rounded-l-md outline-none active:outline-2 active:outline active:outline-veryDarkCyan" value={value} placeholder="Search" />
        {/* <button onClick={onClick} className="bg-lightCyan rounded-r-md transition duration-300 ease-in-out p-1 hover:brightness-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path className="stroke-darkCyan" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button> */}
      </div>
    // </div>
  )
}
