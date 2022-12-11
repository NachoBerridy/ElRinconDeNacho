import { useState } from "react";
import Dots from "../../Atoms/Animations/dots"


const DotsContainer = () => {
    
    function getWindowsDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowsDimensions());

    const amount = Math.floor((windowDimensions.width / 30) * (windowDimensions.height / 30));
    console.log(amount)
    



    return (
        <div className="flex flex-wrap w-full h-full bg-black">
            {[...Array(amount)].map((e, i) => (	
                <Dots key={i} />
            ))}
        </div>
    );
}

export default DotsContainer;