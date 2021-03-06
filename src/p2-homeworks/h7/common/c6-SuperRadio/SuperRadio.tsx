import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import c from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label className={c.label} key={name + '-' + i}>
            <input
                className={c.radio}
                type={'radio'}
                onChange={onChangeCallback}
                name={name}
                value={o}
                checked={o === value}
                {...restProps}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
