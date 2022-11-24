import { setLanguage, setData, setTheme } from "../Reducers/Data/Data";


export const setLanguageAction = (language) => {
    /*
        *   This function is used to set the language in the store.
        *   @param {string} language - The language to set.
        *   Options: "en", "es"
    */
    return (dispatch) => {
        dispatch(setLanguage(language));
    }
}

export const setThemeAction = (theme) => {
    /*
        *   This function is used to set the theme in the store.
        *   @param {string} theme - The theme to set.
        *   Options: "dark", "light"
    */
    return (dispatch) => {
        dispatch(setTheme(theme));
    }
}
