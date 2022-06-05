
const initState = {
    loading:false
}
let SET_LOADING = 'SET_LOADING'

export type LoadingType = {
    loading:boolean
}
type LoadingACType = ReturnType<typeof loadingAC>

export const loadingReducer = (state:LoadingType = initState, action: LoadingACType): LoadingType => { // fix any
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
        default: return state
    }
}

export const loadingAC = (loading:boolean) => {
    return {
        type:SET_LOADING,
        loading:loading
    } as const
}