import { Button } from "./ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import resumePDF from '../assets/Ethan_Resume_SWD.pdf'

const Hero= () => {
    const downloadResume = () => {
        const link = document.createElement('a')
        link.href = resumePDF
        link.download = 'Ethan_Resume_SWD.pdf'
        link.click()
    }

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText("ethanclai03@gmail.com")
            alert("Email copied to clipboard!")
        } catch (err) {
            alert("Failed to copy email")
        }
    }

    return (
        <div className="flex w-full justify-between">
            <div>
                <div className="flex flex-col gap-2">
                    <h1 className="title text-balance text-4xl sm:text-5xl">hi ethan here. 👋</h1>
                    <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">21 year old software developer from Canada 🇨🇦</p>
                    <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">I like to develop full-stack, play sports, and learn new things.</p>
                    <p className="text-balance text-sm font-semibold sm:text-base"><strong>Any questions? Feel free to email me!</strong></p>
                </div>

                <div className="flex items-center mr-5 gap-4 mt-2">
                    <Button onClick={downloadResume} className="cursor-pointer">
                        Resume
                        <FontAwesomeIcon icon={faDownload} />
                    </Button>   
                    <a href="https://www.linkedin.com/in/ethan-lai-2b008221a/">
                        <span className="sr-only">Link to LinkedIn</span>
                        <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                    </a>
                    <a href="https://github.com/Ethan-Lai">
                        <span className="sr-only">Link to Github</span>
                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                    </a>
                    <a onClick={copyEmail} className="cursor-pointer">
                        <span className="sr-only">Copy email</span>
                        <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                    </a>
                </div>
            </div>
            <div>
                REPLACE WITH IMAGE OF MYSELF
            </div>
        </div>
    )
}

export default Hero