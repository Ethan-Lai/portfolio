import Blog from "./Blog"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Header from "../components/Header"
import { Toaster } from "../components/ui/sonner"

const Home = () => {
    return (
        <div>
            <Hero />
            <br />
            <Experience />
            <br />
            <Blog />
            <Toaster />
        </div>
    )
}

export default Home