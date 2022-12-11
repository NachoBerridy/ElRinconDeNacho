import React from "react";
import AboutMainSection from "../../Organisms/AboutMainSection/AboutMainSection";
import TagsCloud from "../../Atoms/Animations/TagsCloud";


const AboutTemplate = () => {

    return (
        <div className="w-full h-full flex items-center justify-between">
                <AboutMainSection   />
                <TagsCloud />
        </div>
    );
}

export default AboutTemplate;