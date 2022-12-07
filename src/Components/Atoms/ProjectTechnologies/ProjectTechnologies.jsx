import { GrReactjs } from "react-icons/gr";
import { GrNode } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";


const ProjectTechnologies = ({ technologies }) => {

    const technologiesDictionary = (technologie) => {

        switch (technologie) {
            case "react":
                return <GrReactjs className="w-1/2 h-5 text-sky-600"/>
            case "node":
                return <GrNode className="w-1/2 h-5 text-lime-700"/>
            case "tailwind":
                return <SiTailwindcss className="w-1/2 h-5 text-teal-500"/>
            case "postgresql":
                return <SiPostgresql className="w-1/2 h-5 text-blue-600" />
            case "sequelize":
                return <SiSequelize className="w-1/2 h-5 text-cyan-700"/>
            case "mongodb":
                return <SiMongodb className="w-1/2 h-5 text-green-800"/>
            case "javascript":
                return <SiJavascript className="w-1/2 h-5 text-yellow-400"/>
            case "typescript":
                return <SiTypescript className="w-1/2 h-5 text-blue-800"/>
            case "html":
                return <SiHtml5 className="w-1/2 h-5 text-orange-500"/>
            case "css":
                return <SiCss3 className="w-1/2 h-5 text-blue-600 "/>
            case "sass":
                return <SiSass className="w-1/2 h-5 text-pink-500"/>
            case "redux":
                return <SiRedux className="w-1/2 h-5 text-violet-800"/>
            case "express":
                return <SiExpress className="w-1/2 h-5 text-gray-400"/>
            default:
                return null
        }
    }

    return (
        <div className="flex flex-wrap justify-around items-start w-full h-fit gap-4">
            {
                technologies.map((technology) => {
                    return (
                        <div className="flex flex-col justify-center items-center w-1/6">
                            {technologiesDictionary(technology.toLowerCase())}
                            <p className="text-sky-400">{technology}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectTechnologies


