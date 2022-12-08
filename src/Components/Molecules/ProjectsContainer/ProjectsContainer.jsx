import { useSelector } from "react-redux";
import ProjectCard from "../../Atoms/ProjectCard/ProjectCard";

const ProjectsContainer = () => {

    const projects = useSelector(state => state.data.data.info.projects.projects)
    
    return (

        <div className="projects-container flex gap-5 flex-wrap justify-between pr-2 items-start w-full h-cloud overflow-x-hidden overflow-y-scroll">
            {projects.map((project, index) => {
                return (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        img={project.img}
                        link={project.link}
                        technologies={project.technologies}
                    />
                )
            })}
        </div>
    )

}

export default ProjectsContainer