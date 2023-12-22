import React from "react";
// import FoodCard from "./FoodCard";

import { BASE_URL } from ".././App";

const FoodcardContainer = ({ data }) => {
  return (
    <div 
      style={{
        backgroundImage: 'url("../bg.png")',
        // height: "100vh",
      }}
      className=" bg-cover bg-center md:min-h-[100vh] min-h-[100vh] "
    >
    <div>
      <div className=" items-center justify-center flex md:flex-row flex-wrap gap-y-5 gap-x-5 flex-col pt-6 pb-3">
        {data?.map(({ image, name, text, price }) => (
          <div key={name} className="backdrop-blur-sm bg-white/20  rounded-lg mt-4 flex h-[180px] w-[390px]">
            <div className="w-[380px] h-[170px] flex items-center shadow-xl  ">
              <div className="w-[100%] ">
                <img className="h-40 " src={BASE_URL + image} />
              </div> 
              <div className="flex flex-col justify-between items-end">
                <div>
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm">{text}</p>
                </div>
                <button className="bg-[#ff4343] hover:bg-amber-500  duration-300 hover:text-black rounded-lg mt-2 px-3 py-[2px]">
                  ${price.toFixed(2)} 
                </button>
              </div> 
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
export default FoodcardContainer;
//  <FoodCard key={food.name}>{food.text}</FoodCard>
