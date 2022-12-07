import { useSelector } from "react-redux";
import ProjectsContainer from "../../Molecules/ProjectsContainer/ProjectsContainer";
import TitleWords from "../../Atoms/TitleLetters/TitleWords";


const ProjectsMainSection = () => {

    const { data } = useSelector(state => state.data)	

    return (
        <div className="proyects-main-section flex flex-col px-5 pt-5 pb-1  justify-between items-start h-screen">
            <div className="">
                <TitleWords title={data.sideItems[2].title} />
                <p className="text-justify text-white text-lg mt-5 w-5/6">
                    {data.sideItems[2].description}
                </p>
            </div>
            <ProjectsContainer />
        </div>
    )
}

export default ProjectsMainSection