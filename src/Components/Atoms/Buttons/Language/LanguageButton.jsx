import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageAction } from "../../../../App/Actions/Actions.js";
import  { ES, GB } from 'country-flag-icons/react/3x2'
import { countries } from 'country-flag-icons'

const LanguageButton = () => {

    const dispatch = useDispatch();

    const { language } = useSelector(state => state.data);

    const handleClick = (e) => {
        if (language === "en") {
            dispatch(setLanguageAction("es"));
        } else {
            dispatch(setLanguageAction("en"));
        }
    }

    return (
        <div>
                {
                    language === "en" ? <ES onClick={handleClick} className='w-10 h-10 hover:cursor-pointer hover:scale-110' /> : <GB  onClick={handleClick} className='w-10 h-10 hover:cursor-pointer hover:scale-110' />
                }
        </div>
    );
}


export default LanguageButton;