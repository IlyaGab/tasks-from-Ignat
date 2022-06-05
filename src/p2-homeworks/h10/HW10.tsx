import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import image from '../h10/assets/Blocks-1s-200px.svg'

function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state=>state.loading.loading )
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=> {
            dispatch(loadingAC(false))
        }, 1500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={image} alt=""/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
