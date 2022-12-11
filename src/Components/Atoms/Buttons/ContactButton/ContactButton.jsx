import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ContactButton = () => {

    const { language } = useSelector(state => state.data);

    return (
            <Link to="/contact" className="text-sky-400 border border-sky-500 shadow-md shadow-emerald-600 py-3 px-5 rounded-md text-2xl hover:text-white hover:bg-sky-400">
                {language === "en" ? "Contact me" : "Contactame"}
            </Link>

    );
}

export default ContactButton;