import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment, {Moment} from 'moment';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Moment>(moment())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            let newDate = moment()
            setDate(newDate)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
       setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.format('HH:mm:ss')
    const stringDate = date.format('DD:MM:YYYY')

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
