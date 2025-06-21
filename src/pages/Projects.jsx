import React from "react"
import { projectsExperience } from "../data/projectData"
import ProjectItem from "../components/ProjectItem"

const Projects = ({ limit }) => {
    const projects = (limit ? projectsExperience.slice(0, limit) : projectsExperience)
        .map(project => 
            <ProjectItem project={project} />
        )

    return (
        <div className="flex flex-col w-full">
            <h1 className={`title text-balance ${limit ? "text-4xl" : "text-5xl"} calistoga-regular`}>{ limit ? "featured projects" : "projects"}</h1>
            <br />
            <div className="grid grid-col-1 sm:grid-cols-2 gap-2">
                {projects}
            </div>
        </div>
    )
}

export default Projects