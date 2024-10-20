import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter.slice";


const store = configureStore({
        reducer: {
            counter: counterSlice.reducer,
            /* user: userSlice.reducer,
            score: scoreSlice.reducer,
            admin: adminSlice.reducer */
        }
    }
);

export default store;