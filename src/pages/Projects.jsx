import React from "react"
import { projectsExperience } from "../data/projectData"
import ProjectItem from "../components/ProjectItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const Projects = ({ limit }) => {
    const navigate = useNavigate()
    
    const projects = (limit ? projectsExperience.slice(0, limit) : projectsExperience)
        .map(project => 
            <ProjectItem project={project} />
        )

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center"> 
                <h1 className={`title text-balance ${limit ? "text-4xl" : "text-5xl"} calistoga-regular`}>{ limit ? "featured projects" : "projects"}</h1>
                {
                    limit &&
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/projects")}>
                        <span>view more</span>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                }
            </div>
            <br />
            <div className="grid grid-col-1 sm:grid-cols-2 gap-2">
                {projects}
            </div>
        </div>
    )
}

export default Projects