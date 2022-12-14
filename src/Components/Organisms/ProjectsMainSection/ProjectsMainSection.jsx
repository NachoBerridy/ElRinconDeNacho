import { useSelector } from "react-redux";
import ProjectsContainer from "../../Molecules/ProjectsContainer/ProjectsContainer";
import TitleWords from "../../Atoms/TitleLetters/TitleWords";


const ProjectsMainSection = () => {

    const info = useSelector(state => state.data.data.info.projects)	

    return (
        <div className="proyects-main-section flex flex-col px-5 pt-5 pb-1  justify-between items-start h-screen">
            <div className="">
                <TitleWords title={info.title} />
                <p className="text-justify text-white text-lg mt-5 w-5/6">
                    {info.description}
                </p>
            </div>
            <ProjectsContainer />
        </div>
    )
}

export default ProjectsMainSection