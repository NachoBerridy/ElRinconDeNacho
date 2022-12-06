import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';

const NetworksButtons = () => {

    return (
        <div className="flex flex-row gap-10 z-50">
            <a href=" https://github.com/NachoBerridy/" target="_blank" rel="noreferrer" className="bg-transparent hover:scale-110 hover:cursor-pointer focus:outline-none w-10 p-0 hover:border-transparent">
                <GoMarkGithub className="w-10 h-10 z-50 text-sky-400" />
            </a>
            <a href="https://www.linkedin.com/in/ignacioberridy/" target="_blank" rel="noreferrer" className="bg-transparent hover:scale-110 hover:cursor-pointer focus:outline-none p-0 w-fit h-fit hover:border-transparent">
                <BsLinkedin className="w-10 h-10 z-50 text-sky-400" />
            </a>
        </div>
    )
}

export default NetworksButtons;
