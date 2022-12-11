import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeTemplate from "../../Components/Templates/Home/HomeTemplate";


const Home = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <HomeTemplate />
        </div>
    );
}

export default Home;