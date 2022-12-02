import React from "react";
import HomeMainSection from "../../Organisms/HomeMainSection/HomeMainSection";
import DotsContainer from "../../Molecules/DotsContainer/DotsContainer";

const HomeTemplate = () => {
    return (
        // <div className="w-full grid grid-cols-12 grid-rows-6 p-2">
        <div className=" flex flex-col justify-center items-center h-screen w-full">
            {/* <div className="col-start-1 row-start-2 col-span-full  bg-slate-500 h-title"> */}
            <HomeMainSection className=" z-50" />
            {/* </div> */}
            <DotsContainer />   
        </div>
    );
}

export default HomeTemplate;