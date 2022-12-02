import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useSpring, animated, config } from 'react-spring';
import { Clouder } from '../../../Utils/cloud.js';



const TagsCloud = () => {


    const Technologies = useSelector(state => state.data.data.Technologies)
    const TechRef = useRef()

    const tagGenerator = (techs) => {
        const tags = []
        techs.map((tech, index) => {
            tags.push({
                text: tech,
                id : index,
                weight : (Math.floor(Math.random() * 10) + 1)*0.1,
            })
        })
        return tags
    }
    
    useEffect(() => {
        TechRef.current.innerHTML = ""
        new Clouder({
            container: TechRef.current,
            tags: tagGenerator(Technologies),
            colorMax: "#38bdf8",
            colorMin: "#2563eb",
        })
    }, [])


    return (
        <div className='w-about h-cloud relative p-2 overflow-hidden' ref={TechRef}>

        </div>

    );
};

export default TagsCloud;