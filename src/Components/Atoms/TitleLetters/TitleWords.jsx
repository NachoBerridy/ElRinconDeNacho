import React from "react";


const TitleWords = ({ title }) => {

    const words = title.split(" ");

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
                                                <div className="flex pb-2 text-7xl hover:cursor-default hover:animate-loopScale text-sky-400 ease-in-out hover:text-sky-300">{letter}</div>
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