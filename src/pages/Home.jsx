import Blog from "./Blog"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import { Toaster } from "../components/ui/sonner"
import Projects from "./Projects"

const Home = () => {
    return (
        <div>
            <Hero />
            <br />
            <Experience />
            <br />
            <Projects />
            <br />
            <Blog />
            <Toaster />
        </div>
    )
}

export default Home