import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import TitleWords from "../../Atoms/TitleLetters/TitleWords"


const Title = () => {

    const { data } = useSelector(state => state.data)
    const { language } = useSelector(state => state.data)

    useEffect(() => {
    }, [language])

    return (
        <div className="title ">
            {
                data.title.map((title, index) => (
                    <TitleWords key={index} title={title} />
                ))
            }
        </div>
    )
}

export default Title