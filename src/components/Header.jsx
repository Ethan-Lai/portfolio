import React from "react"
import { ModeToggle } from "./ui/mode-toggle"

const Header = () => {
    return (
        <div className="flex justify-between items-center fixed w-full h-20 bg-background/75 backdrop-blur-sm max-w-3xl pl-16 pr-16">
            <div className="flex gap-3">
                <span>Home</span>
                <span>Projects</span>
                <span>Blog</span>
            </div>
            <div className="flex gap-3">
                <span>hello</span>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Header