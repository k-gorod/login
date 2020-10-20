import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IUser {
    name:string,
    email: string
}
const initialState = {
    isAuth:false,
    name:"",
    email:""
}
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changeAuth: (state, { payload }: PayloadAction<boolean>) => {
            state.isAuth = payload;
        },
        changeUser: (state, { payload }: PayloadAction<IUser>) =>{
            state.name = payload.name;
            state.email = payload.email;
        }
    },
});

export const {changeAuth, changeUser} = dataSlice.actions;
export default dataSlice.reducer;