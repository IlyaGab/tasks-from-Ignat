import React from 'react'

import {Box, Slider} from '@mui/material';



// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType =  { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value:number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        // достаём и игнорируем чтоб нельзя было задать другой тип инпута
       onChangeRange,
       value
    }
) => {
    const onChangeCallback = (event: Event, newValue: number | number[]) => {// сохраняем старую функциональность
      onChangeRange && onChangeRange(newValue as number)
    }


    return (
        <>
            <Box width={300}>
            <Slider value={value} onChange={onChangeCallback}  />
            </Box>
        </>
    )
}

export default SuperRange
