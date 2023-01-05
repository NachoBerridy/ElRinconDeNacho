import React from "react";
import HomeMainSection from "../../Organisms/HomeMainSection/HomeMainSection";
import DotsContainer from "../../Molecules/DotsContainer/DotsContainer";
import Dots from "../../Atoms/Animations/dots";
import Bounce from "../../Atoms/Animations/bounce";

const HomeTemplate = () => {
    return (
        // <div className="w-full grid grid-cols-12 grid-rows-6 p-2">
        <div className="relative flex flex-col justify-center items-start h-screen w-full overflow-hidden">
            {/* <div className="col-start-1 row-start-2 col-span-full  bg-slate-500 h-title"> */}
            <HomeMainSection />
            {/* </div> */}
            {/* <DotsContainer />    */}
            {/* <Bounce /> */}
            <Dots />
        </div>
    );
}

export default HomeTemplate;