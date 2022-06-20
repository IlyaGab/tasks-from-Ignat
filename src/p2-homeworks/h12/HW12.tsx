import React, {ChangeEvent, useState} from 'react';
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';


function HW12() {
    const theme = useSelector<AppStoreType,string>((state)=> state.theme.theme)

    const themes = ['dark', 'red', 'some'];
    const [value, setValue] = useState(themes[2])
    const dispatch = useDispatch()

    const onChangeCallback = (e:ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
        dispatch(changeThemeC(e.currentTarget.value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} value={value} onChange={onChangeCallback}/>
            <hr/>
        </div>
    );
}

export default HW12;
