import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SideItems = ({title}) => {

    const { language } = useSelector(state => state.data)

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
        <div className=" flex flex-col gap-2 justify-center items-start divide-y divide-white">
            <Link to={`/${link}`} className="text-white text-2xl font-bold">{title}</Link>	
        </div>
    );
}

export default SideItems;
