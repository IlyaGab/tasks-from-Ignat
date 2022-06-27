import axios from 'axios';

export const RequestsApi = {
    postRequest(success:boolean){
       return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success})
    }
}

