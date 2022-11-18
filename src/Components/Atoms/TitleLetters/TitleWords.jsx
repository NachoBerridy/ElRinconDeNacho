import React from "react";


const TitleWords = ({ title }) => {

    

    return (
        <div className="flex font-black ">
            {title.split("").map((letter, index) => (
                <span className=" hover:text-lime-600"  key={index}>{letter}</span>
            ))}
        </div>
    );
}

export default TitleWords;