import Blog from "./components/Blog"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Header from "./components/Header"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col items-center max-w-3xl ml-auto mr-auto pl-16 pr-16">
                <Header />
                <div className="mt-25">
                    <Hero />
                    <br />
                    <Experience />
                    <br />
                    <Blog />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App