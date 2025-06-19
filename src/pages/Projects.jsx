import React from "react"
import { projectsExperience } from "../data/projectData"
import ProjectItem from "../components/ProjectItem"

const Projects = () => {
    const projects = projectsExperience.map(project => 
        <ProjectItem project={project} />
    )

    return (
        <div className="flex flex-col w-full">
            <h1 className="title text-balance text-4xl sm:text-5xl">Projects</h1>
            <br />
            <div className="grid grid-cols-2 gap-2">
                {projects}
            </div>
        </div>
    )
}

export default Projects