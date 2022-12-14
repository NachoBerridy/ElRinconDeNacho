import React from "react";
import SideItemsContainer from "../../Molecules/SideItemsContainer/SideItemsContainer";
import HomeButton from "../../Atoms/Buttons/HomeButton/HomeButton";
import NetworksButtons from "../../Atoms/Buttons/networksButton/networksButton";

const SideBar = () => {

    return (
        <div className="flex flex-col justify-around items-center  h-full  w-full top-0 left-0">
            <div className="h-1/5 flex justify-center items-center">
                <HomeButton />
            </div>
            <div className="h-3/5 w-full flex justify-center">
                <SideItemsContainer />
            </div>
            <div className="h-1/5 w-full flex justify-center items-center">
                <NetworksButtons color='text-neutral-400' size='9'/>
            </div>
        </div>
    );
}

export default SideBar;