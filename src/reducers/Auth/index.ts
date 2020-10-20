import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {isAuth:false},
    reducers: {
        changeAuth: (state, { payload }: PayloadAction<boolean>) => {
            state.isAuth = payload;
        },
    },
});

export const {changeAuth} = dataSlice.actions;
export default dataSlice.reducer;