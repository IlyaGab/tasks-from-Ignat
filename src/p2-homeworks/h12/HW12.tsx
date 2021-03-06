import React, {ChangeEvent} from 'react';
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';


function HW12() {
    const theme = useSelector<AppStoreType,string>((state)=> state.theme.theme)

    const themes = ['dark', 'red', 'some'];
    const dispatch = useDispatch()

    const onChangeCallback = (theme:string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect options={themes} value={theme} onChangeOption={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
