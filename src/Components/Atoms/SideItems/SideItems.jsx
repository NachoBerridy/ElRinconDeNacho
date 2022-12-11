import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideItems = ({title}) => {

    const { language } = useSelector(state => state.data)
    const location = useLocation()
    const { pathname } = location

    const traslate = (title) => {
        if (language === "es") {
            switch (title) {
                case "Habilidades":
                    return "Skills"
                case "Proyectos":
                    return "Projects"
                case "Contacto":
                    return "Contact"
                case "Sobre mí":
                    return "About"
                default:
                    return title
            }
        } else {
            return title
        }
    }

    const link = traslate(title).toLowerCase()
    return (
        <Link   to={`/${link}`} 
                className={`${pathname === `/${link}` ? "text-sky-400" : "text-gray-400"}
                            flex flex-col 
                            text-white 
                            text-xl 
                            font-bold 
                            gap-2 
                            justify-center 
                            items-center 
                            py-5 
                            w-full 
                            bg-white-900 
                            bg-clip-padding 
                            backdrop-filter 
                            backdrop-blur-3xl 
                            bg-opacity-100
                            `}
        >
            {title}
        </Link>
    );
}

export default SideItems;
