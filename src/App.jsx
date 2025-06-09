import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/Header'

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">      
            <div className="flex flex-col max-w-3xl ml-auto mr-auto pl-16 pr-16">
                <Header />
                <div className="mt-25">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </div>

            </div>
        </ThemeProvider>
    )
}

export default App