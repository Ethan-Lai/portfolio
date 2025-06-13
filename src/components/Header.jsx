import React from "react"
import { ModeToggle } from "./ui/mode-toggle"
import { useNavigate } from "react-router-dom"

const Header = () => {
    let navigate = useNavigate()

    return (
        <div className="flex justify-between items-center fixed w-full h-20 bg-background/75 backdrop-blur-sm max-w-3xl pr-16 z-10">
            <div className="flex items-center gap-3">
                <span className="cursor-pointer" onClick={() => navigate("/")}>Home</span>
                <span className="cursor-pointer" onClick={() => navigate("/projects")}>Projects</span>
                <span className="cursor-pointer" onClick={() => navigate("/blog")}>Blog</span>
            </div>
            <div className="flex items-center gap-3">
                <ModeToggle />
            </div>
        </div>
    )
}

export default Header