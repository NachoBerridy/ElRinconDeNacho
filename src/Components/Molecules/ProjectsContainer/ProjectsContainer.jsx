import { useSelector } from "react-redux";
import ProjectCard from "../../Atoms/ProjectCard/ProjectCard";

const ProjectsContainer = () => {

    const { data } = useSelector(state => state.data)

    const projects = data.sideItems[2].projects
    console.log(projects[0].img)

    return (

        <div className="projects-container flex gap-5 flex-wrap justify-around items-start p-4 w-full h-cloud overflow-y-scroll">
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