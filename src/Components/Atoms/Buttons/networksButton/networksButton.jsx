import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';

const NetworksButtons = ({color, size}) => {

    return (
        <div className="flex flex-row gap-10 z-50">
            <a href=" https://github.com/NachoBerridy/" target="_blank" rel="noreferrer" className="bg-transparent hover:scale-110 hover:cursor-pointer focus:outline-none w-10 p-0 hover:border-transparent">
                <GoMarkGithub className={`w-${size} h-${size} z-50 ${color}`} />
            </a>
            <a href="https://www.linkedin.com/in/ignacioberridy/" target="_blank" rel="noreferrer" className="bg-transparent hover:scale-110 hover:cursor-pointer focus:outline-none p-0 w-fit h-fit hover:border-transparent">
                <BsLinkedin className={`w-${size} h-${size} z-50 ${color}`}/>
            </a>
        </div>
    )
}

export default NetworksButtons;
