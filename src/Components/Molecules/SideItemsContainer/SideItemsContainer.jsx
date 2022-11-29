import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import SideItems from "../../Atoms/SideItems/SideItems";

const SideItemsContainer = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.data)
    const { language } = useSelector(state => state.data)
    const [SideItemsArray, SideItemsArraySet] = useState([])


    useEffect(() => {
        
    }, [language])

    return (
        <div className="side-items-container">
            {
                data.sideItems.map((item, index) => {
                    return <SideItems key={index} title={item.title} />
                }
                )   
            }
        </div>
    );
}

export default SideItemsContainer;

