import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import c from  './Select.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options? options.map((o,i)=> {
        return <option key={i} value={o}>{o}</option> }):[]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)

    }

    return (
        <select className={c.select} onChange={onChangeCallback}  {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
