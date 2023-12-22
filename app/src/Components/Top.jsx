import React from "react";

const Top = ({ handlechange, clickedBtn, arrBtn }) => {
  return (
    <div className="max-w-[1200px] m-auto mb-3">
      <div className="flex justify-between items-center h-28 p-4">
        <div>
          <img src="/public/logo.svg" alt="logo" />
        </div>
        <div>
          <input
            onChange={handlechange}
            className=" md:w-56 bg-transparent rounded h-10 py-4 px-1 border-[2px] border-solid border-red-900"
            placeholder="Search Food"
          />
        </div>
      </div>
      {/* <div className=" max-w-[300px] md:max-w-[350px] m-auto  flex  justify-between ">
        <button onClick={()=>clickedBtn("all")} className="bg-[#ff4343] rounded-sm px-3 py-[2px]">All</button>
        <button onClick={()=>clickedBtn("breakfast")} className="bg-[#ff4343] rounded-sm px-3 py-[2px]">
          BreakFast
        </button>
        <button onClick={()=>clickedBtn} className="bg-[#ff4343] rounded-sm px-3 py-[2px]">Lunch</button>
        <button onClick={()=>clickedBtn} className="bg-[#ff4343] rounded-sm px-3 py-[2px]">
          Dinner
        </button>
      </div> */}
      <div className=" max-w-[300px] md:max-w-[350px] m-auto  flex  justify-between ">
        {arrBtn.map((value) => (
          <button
            key={value.name}
            onClick={() => clickedBtn(value.type)}
            className="bg-[#ff4343] rounded-sm px-3 py-[2px] hover:bg-gray-700 duration-300"
          >
            {value.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Top;
