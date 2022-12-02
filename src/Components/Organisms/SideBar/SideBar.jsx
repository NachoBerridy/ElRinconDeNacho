import React from "react";
import SideItemsContainer from "../../Molecules/SideItemsContainer/SideItemsContainer";
import HomeButton from "../../Atoms/Buttons/HomeButton/HomeButton";

const SideBar = () => {

    return (
        <div className="flex flex-col p-2 justify-center items-center  h-full absolute w-full top-0 left-0">
            <HomeButton />
            <SideItemsContainer />
        </div>
    );
}

export default SideBar;