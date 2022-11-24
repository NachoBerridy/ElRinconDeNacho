import React from "react";


const SideItems = ({title}) => {

    return (
        <div className=" flex flex-col gap-2 justify-center items-start divide-y divide-white">
            <span className=" font-sans font-medium text-2xl ">
                {title}
            </span>
        </div>
    );
}

export default SideItems;
