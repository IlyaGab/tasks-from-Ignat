import {checkActionType, sortActionType, UserType} from '../HW8';

type SortUpType = {
    type: 'sort'
    payload: string
}
type SortDownType = {
    type: 'sort'
    payload: string
}
type CheckType = {
    type: 'check'
    payload: number
}
type ActionsTypes = SortUpType | SortDownType | CheckType

export const homeWorkReducer = (state: Array<UserType>, action:ActionsTypes): Array<UserType> => {
    let newArray = [...state]// need to fix any
    switch (action.type) {
        case 'sort': {
            return newArray.sort((a,b)=> action.payload === 'up' ? b.age-a.age : a.age-b.age)
        }
        case 'check': {
            return newArray.filter(m => m.age > action.payload)
        }
        default:
            return state
    }

}

export const sortUpAc = (payload:string):SortUpType => {
    return ({type: sortActionType, payload:payload})
}

export const sortDownAc = (payload:string):SortDownType=> {
    return ({type: sortActionType, payload:payload})
}

export const checkAc = (payload:number):CheckType => {
    return ({type: checkActionType, payload:payload})
}
