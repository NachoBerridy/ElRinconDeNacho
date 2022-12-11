import React, { useEffect } from "react";
import { useSelector } from "react-redux"
import SideItems from "../../Atoms/SideItems/SideItems";

const SideItemsContainer = () => {
    const items = useSelector(state => state.data.data.info)
    const { language } = useSelector(state => state.data)


    useEffect(() => {
        
    }, [language])

    return (
        <div className="side-items-container flex flex-col w-full divide-y justify-center items-center">
            {
                Object.keys(items).map((item, index) => {
                    return <SideItems key={index} title={items[item].title} />
                })
            }
        </div>
    );
}

export default SideItemsContainer;

