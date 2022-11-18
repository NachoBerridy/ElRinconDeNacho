import { createSlice } from "@reduxjs/toolkit";
import ES from '../../../assets/ES.json'
import EN from '../../../assets/EN.json'


const initialState = {
    language: "en",
    theme: "dark",
    data : {
        es: ES,
        en: EN
    },
}

const dataSlice = createSlice({

    name: "data",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
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