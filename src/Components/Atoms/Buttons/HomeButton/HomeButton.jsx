import React from "react";
import { useSelector } from "react-redux";
import logoen from "../../../../Assets/logoen.png";
import logoes from "../../../../Assets/logoes.png";
import { Link } from "react-router-dom";

const HomeButton = () => {

    const { language } = useSelector((state) => state.data);

    return (
        <div className="h-full flex justify-center items-center w-full">
            <Link to="/">
                <div className="home-button__container">
                    <img src= {language === 'es'? logoes : logoen} alt="logo" className="home-button__container__logo" />
                    {/* <a href="https://www.flaticon.com/free-icons/wolf" title="wolf icons">Wolf icons created by Icongeek26 - Flaticon</a> */}
                </div>
            </Link>
        </div>
    );
}

export default HomeButton;
