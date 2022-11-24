import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import TitleWords from "../../Atoms/TitleLetters/TitleWords"


const Title = () => {

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.data)
    const { language } = useSelector(state => state.data)

    useEffect(() => {
    }, [language])

    return (
        <div className="title ">
            {
                language === "es" ?
                    data.es.title.map((title, index) => (
                        <TitleWords key={index} title={title} />
                    ))
                    :
                    data.en.title.map((title, index) => (
                        <TitleWords key={index} title={title} />
                    ))
            }
        </div>
    )
}

export default Title