import React from 'react'
import {Box, Slider} from '@mui/material';


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
    }
) => {
    const minDistance = 1

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            onChangeRange && onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            onChangeRange && onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };


    return (
        <>
            <Box sx={{width: 300}}>
                <Slider
                    value={value}
                    onChange={handleChange}
                />
            </Box>

        </>
    )
}

export default SuperDoubleRange
