import React from "react";


const TitleWords = ({ title }) => {

    const words = title.split(" ");

    return (
        <div className="flex font-black ">
            {
                words.map((word, index) => {
                    return (
                        <div className="flex ml-2" key={index}>
                            {
                                word.split("").map((letter, index) => {
                                    return (
                                        <div className="flex flex-col" key={index}>
                                            <div className="flex flex-col">
                                                <span className="text-5xl text-white hover:cursor-default hover:scale-110">{letter}</span>
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