import React from "react";
import HomeMainSection from "../../Organisms/HomeMainSection/HomeMainSection";
import SideBar from "../../Organisms/SideBar/SideBar";
import LanguageButton from "../../Atoms/Buttons/Language/LanguageButton";

const HomeTemplate = () => {
    return (
        <div className="absolute top-0 left-0 w-screen grid grid-cols-12 grid-rows-6 p-2">
            <div className="row-span-full col-span-2 col-start-0">
                <SideBar />
            </div>
            <div className="col-start-3 row-start-3">
                <HomeMainSection   />
            </div>
            <div className=" col-start-12">
                <LanguageButton />
            </div>
        </div>
    );
}

export default HomeTemplate;