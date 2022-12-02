import React from "react";
import { useSelector } from "react-redux";

const AboutMainSection = () => {

    const info = useSelector(state => state.data.data.sideItems)[0]

    return (
        <div className="h-about w-about justify-center items-center p-4 ">
                <div className=" flex flex-col h-full w-full gap-10 items-start">
                    <h1 className="text-6xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 ">
                            { info.title } 
                        </span>
                    </h1>
                    <div className="flex flex-col items-start justify-start">
                        {
                            info.description.map ((item, index) => {
                                return <span key={index} className="text-white text-justify text-xl ">{item}</span>
                            })
                        }
                    </div>
                </div>
        </div>

    );

}

export default AboutMainSection;