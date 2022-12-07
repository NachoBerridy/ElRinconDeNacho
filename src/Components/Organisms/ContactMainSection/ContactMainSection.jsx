import { useSelector } from "react-redux"
import ContactForm from "../../Molecules/ContactForm/ContactForm"
import NetworksButtons from "../../Atoms/Buttons/networksButton/networksButton"
import TitleWords from "../../Atoms/TitleLetters/TitleWords"
import ContactDescription from "../../Molecules/ContactDescription/ContactDescription"

const ContactMainSection  = () => {

    const { language } = useSelector(state => state.data);
    const { data } = useSelector(state => state.data);
    console.log(data.sideItems)

    return (
        <div className="flex flex-col justify-around items-center w-full h-full">
            <ContactDescription title={data.sideItems[3].subTitle} description={data.sideItems[3].description} />
            <ContactForm />
            <NetworksButtons color='text-sky-400' size='10'/>
        </div>
    )
}

export default ContactMainSection