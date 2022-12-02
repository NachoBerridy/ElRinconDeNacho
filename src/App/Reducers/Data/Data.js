import { createSlice } from "@reduxjs/toolkit";
import ES from '../../../assets/ES.json'
import EN from '../../../assets/EN.json'


const initialState = {
    language: "es",
    theme: "dark",
    data : ES
}

const dataSlice = createSlice({

    name: "data",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            if (state.language === "en") {
                state.data = EN
            } else {
                state.data = ES
            }
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const { setLanguage, setData, setTheme } = dataSlice.actions;
export default dataSlice.reducer;