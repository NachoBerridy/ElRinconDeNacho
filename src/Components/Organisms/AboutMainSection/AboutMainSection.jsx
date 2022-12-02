import React from "react";
import { useSelector } from "react-redux";

const AboutMainSection = () => {

    const { language } = useSelector(state => state.data)
    const eng = useSelector(state => state.data.data.en.sideItems)[0]
    console.log(eng)

    return (
        <div className="flex flex-col h-full justify-center items-start ">
            {
                language === "en" ?
                <div className=" flex flex-col gap-10 items-start">
                    <h1 className="text-4xl font-bold text-white">ABOUT ME</h1>
                    {
                        eng.description.map ((item, index) => {
                            return <p key={index} className="text-white">{item}</p>
                        })
                    }
                </div>
                :
                <div className="flex flex-col gap-2 justify-center items-start">
                    <h1 className="text-4xl font-bold text-white">Sobre mí</h1>
                    <p className="text-white text-xl">adsdas</p>
                </div>
            }
        </div>

    );

}

export default AboutMainSection;