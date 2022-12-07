import React from "react";


const TitleWords = ({ title }) => {

    const words = title.split(" ");

    const loopScale = (e) => {
        e.target.animate([
            { transform: "scale(1.2, 0.8)" },
            { transform: "scale(0.8, 1.2)" },
            { transform: "scale(1.2, 0.8)" },
            { transform: "scale(1)" },
        ], {
            duration: 1000,
            iterations: 1,
            easing: 'ease-in-out'
        })
    }

        

    return (
        <div className="flex font-black ">
            {
                words.map((word, index) => {
                    return (
                        <div className="flex mr-5 " key={index}>
                            {
                                word.split("").map((letter, index) => {
                                    return (
                                        <div className="flex flex-col" key={index}>
                                            <div className="flex flex-col">
                                            {/* bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 */}
                                                <div onMouseLeave = {e => loopScale(e)} className="flex font-openSans pb-2 text-7xl hover:cursor-default hover:animate-loopScale text-sky-400 ease-in-out hover:text-sky-300">{letter}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TitleWords;