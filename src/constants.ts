interface IStore {
    isAuth: boolean,
    changeAuth: (value: boolean) => void
}
export const store: IStore = {
    isAuth: false,
    changeAuth: ()=>{}
}