import React, {ChangeEvent, useState} from 'react';
import { RequestsApi} from '../api/Requests.api';

const Request = () => {

    const [value, setValue] = useState(true)
    const [text, setText] = useState('Ожидайте ответ...')

    const onChangeCheckbox = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    const onClickHandler = () => {
        RequestsApi.postRequest(value)
            .then((response) => {
                setText(response.data.errorText)
            })
            .catch((error) => {
                setText(error.response.data.errorText)
            })
    }

    return (
        <div>
            <div>{text}</div>
            <input checked={value} onChange={onChangeCheckbox} type="checkbox" />
            <button onClick={onClickHandler}>post</button>
        </div>
    );
};

export default Request;