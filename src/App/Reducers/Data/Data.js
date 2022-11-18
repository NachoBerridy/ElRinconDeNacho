import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    language: "en",
    theme: "dark",
    data : {},
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