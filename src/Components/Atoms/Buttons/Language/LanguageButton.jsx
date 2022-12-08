import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageAction } from "../../../../App/Actions/Actions.js";
import  { ES, GB } from 'country-flag-icons/react/3x2'
import { countries } from 'country-flag-icons'

const LanguageButton = () => {

    const dispatch = useDispatch();

    const { language } = useSelector(state => state.data);
    const [disabledEs, setDisabledEs] = React.useState(false);
    const [disabledEn, setDisabledEn] = React.useState(true);

    const handleClick = (e) => {
        e.preventDefault();
        if (language === "en") {
            dispatch(setLanguageAction("es"));
            setDisabledEs(true);
            setDisabledEn(false);
        } else {
            dispatch(setLanguageAction("en"));
            setDisabledEs(false);
            setDisabledEn(true);
        }
    }


    return (
        <div className="flex flex-row gap-3 z-50">
            <button disabled={disabledEs} onClick={handleClick} className="bg-transparent hover:scale-110 hover:cursor-pointer focus:outline-none w-10 p-0 hover:border-transparent disabled:cursor-not-allowed">
                <ES  className={`z-50 w-10 h-10  ${disabledEn? "filter grayscale":null}`}/>
            </button>
            <button disabled={disabledEn} onClick={handleClick} className="bg-transparent hover:scale-110 hover:cursor-pointer focus:outline-none p-0 w-fit h-fit hover:border-transparent disabled:cursor-not-allowed">
                <GB  className={`w-10 h-10 z-50   ${disabledEs? "filter grayscale":null}`}/>
            </button>
        </div>
    );
}


export default LanguageButton;