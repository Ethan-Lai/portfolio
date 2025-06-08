import Blog from "./components/Blog"
import Header from "./components/Hero"
import Experience from "./components/Experience"

const App = () => {
    return (
        <div className="flex flex-col items-center ml-50 mr-50">
            <Header />
            <br />
            <Experience />
            <br />
            <Blog />
        </div>
    )
}

export default App