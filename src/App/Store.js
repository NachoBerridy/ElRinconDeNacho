import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Reducers/Data/Data";


const store = configureStore({
    reducer: {
        data: dataReducer,
    }
});

export default store;