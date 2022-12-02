import React from "react";
import Title from "../../Molecules/Title/Title";
import ContactButton from "../../Atoms/Buttons/ContactButton/ContactButton";

const HomeMainSection = () => {
    return (
        <div className="flex flex-col gap-3 w-full h-fit items-start pl-8">
            <Title />
            <ContactButton />
        </div>
    );
}

export default HomeMainSection;