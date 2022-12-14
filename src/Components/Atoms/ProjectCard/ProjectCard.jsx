import { useState } from "react";
import { useSelector } from "react-redux";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import { BsHeart } from "react-icons/bs"
import { BsHeartFill } from "react-icons/bs"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { FiLink } from "react-icons/fi";
import { useSpring, a } from "react-spring";

const ProjectCard = ({title, img, description, link, technologies}) => {

    const [ flipped, set ]  = useState(false)
    const [ liked, setLiked ] = useState(false)
    const { language } = useSelector(state => state.data)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })


    return (
        <div className="flex flex-col items-center justify-around w-project h-project bg-sideBg shadow-md shadow-neutral-900 rounded-lg">
            <div className="flex justify-center items-center w-full h-1/6">
                <h1 className="font-sans text-3xl font-extrabold w-1/2 ">{title}</h1>
            </div>
            <div onClick={() => set(state => !state)} className="w-full h-2/3 flex flex-col justify-around">
                {
                    !flipped ? (
                        <a.div className=" w-full h-full"
                             style={{   opacity: opacity.to(o => 1 - o), 
                                        transform,  
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                        />
                    ) : (
                        <a.div className="flex flex-col w-full h-full p-2 bg-zinc-900 overflow-auto justify-around items-center" 
                            style={{opacity,
                                    transform,
                                    rotateY: '180deg',
                                }} 
                        >
                            <p className=" text-justify">{description}</p>  
                            <ProjectTechnologies technologies={technologies}/>  
                        </a.div>
                    )
                }
            </div>
            {/* <p className=" text-justify">{description}</p> */}
            <div className="flex justify-around w-full  items-center h-1/6">
                <div className="flex items-center h-full">
                    {
                        liked ? (
                            <BsHeartFill className="h-2/5 w-auto text-pink-500 hover:scale-105 hover:cursor-pointer" onClick={() => setLiked(state => !state)}/>
                        ) : (
                            <BsHeart className="h-2/5 w-auto text-pink-500 hover:scale-105 hover:cursor-pointer" onClick={() => setLiked(state => !state)}/>
                        )
                    }
                </div>
                <a href={link} target="blank" className="flex gap-3 h-full items-center bg-transparent focus:outline-none border-none hover:scale-105">
                    <FiLink className="h-2/5 w-auto text-sky-400 "/> 
                    <p className=" text-white text-xl">Link</p>
                </a>
                <button onClick={() => set(state => !state)} className="flex gap-3 h-full items-center bg-transparent focus:outline-none border-none hover:scale-105">
                    <AiOutlineInfoCircle className="h-2/5 w-auto text-sky-400 hover:scale-105 hover:cursor-pointer"/>
                    {
                        language === 'en' ? (
                            !flipped ? (
                                <p className="text-white text-xl">More Info</p>
                            ) : (
                                <p className="text-white text-xl">Hide</p>
                            )
                        ) : (
                            !flipped ? (
                                <p className="text-white text-xl">Más Info</p>
                            ) : (
                                <p className="text-white text-xl">Ocultar</p>
                            )
                        )
                    }
                </button>
            </div>
        </div>

    )
}

export default ProjectCard

