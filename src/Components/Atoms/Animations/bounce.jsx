import { useState } from "react";
const Bounce = () => {
    
    
    //create multiples dots  moving around the screen

    function getWindowsDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowsDimensions());

    const amount = Math.floor((windowDimensions.width / 30) * (windowDimensions.height / 30));
    console.log(amount)

    //make a function that moves the dots 


    return (
        <div className="absolute top-0 left-0 flex flex-wrap w-screen h-screen mt-3 ml-2 overflow-hidden">
            {[...Array(amount)].map((e, i) => (
                <div key={i} className={`boxes w-dotsBox h-dotsBox relative float-left hover:scale-125`}>
                    <div className={`circle absolute w-dots h-dots top-${getRandomInt(6)}/6  left-${getRandomInt(6)}/6  bg-sky-500 rounded-full hover:bg-white`} >
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Bounce;