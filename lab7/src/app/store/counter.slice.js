import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            console.log(`Incrementa: ${JSON.stringify(action)}`);
            
            state.value += 1
        },
        decrement: (state, action) => {
            console.log(`Decrementa: ${JSON.stringify(action)}`);
            state.value -= 1
        }
    }
});

export const { increment, decrement } = counterSlice.actions;