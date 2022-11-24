import React from "react";
import HomeMainSection from "../../Organisms/HomeMainSection/HomeMainSection";
import SideBar from "../../Organisms/SideBar/SideBar";
import LanguageButton from "../../Atoms/Buttons/Language/LanguageButton";

const HomeTemplate = () => {
    return (
        <div className="w-full grid grid-cols-12 grid-rows-6 p-2">
            <div className="col-start-1 row-start-3">
                <HomeMainSection />
            </div>
        </div>
    );
}

export default HomeTemplate;