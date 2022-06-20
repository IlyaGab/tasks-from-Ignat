const initState = {
   theme:'some'
};

const SET_THEME = 'SET_THEME'

type ThemeType = {
    theme: string
}

type ActionsType = ReturnType<typeof changeThemeC>

export const themeReducer = (state:ThemeType = initState, action: ActionsType): ThemeType=> { // fix any
    switch (action.type) {
        case SET_THEME: {
            return {...state, theme: action.theme };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) =>  {return ({type:SET_THEME, theme }) as const }; // fix any