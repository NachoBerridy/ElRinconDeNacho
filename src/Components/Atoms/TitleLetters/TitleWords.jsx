import React from "react";


const TitleWords = ({ title }) => {

    const words = title.split(" ");

    return (
        <div className="flex font-black ">
            {
                words.map((word, index) => {
                    return (
                        <div className="flex ml-2 " key={index}>
                            {
                                word.split("").map((letter, index) => {
                                    return (
                                        <div className="flex flex-col" key={index}>
                                            <div className="flex flex-col">
                                                <span className="text-5xl hover:cursor-default hover:animate-bounce ease-in-out duration-1000 hover:scale-110 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{letter}</span>
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