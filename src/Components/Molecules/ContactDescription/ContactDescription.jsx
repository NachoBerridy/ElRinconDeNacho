import TitleWords from "../../Atoms/TitleLetters/TitleWords"

const ContactDescription = ({ title, description }) => {

    return(
        <div className="flex flex-col w-about justify-start items-start font-sans gap-4">
            <div className="title ">
                <TitleWords title={title} />
            </div>
            <div>
                <p className="text-xl font-sans font-semibold text-left">{description}</p>
            </div>
        </div>
    )

}

export default ContactDescription