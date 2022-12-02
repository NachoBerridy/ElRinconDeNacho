import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {

    return (
        <div className="home-button">
            <Link to="/">
                <div className="home-button__container">
                    <div className="home-button__container__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1-15h2v8h-2v-8zm0 10h2v2h-2v-2z"/></svg>
                        Home
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HomeButton;
