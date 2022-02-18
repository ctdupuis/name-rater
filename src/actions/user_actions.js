import axios from "axios";
import { API_ROOT } from '../constant'

export const authStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/users/auth`, { withCredentials: true });
        const user = response.data.auth;
        console.log(user)
        if (user.auth) {
            dispatch({ type: 'END_LOAD' })
        } else {
            dispatch({ type: 'LOGIN_USER', payload: user })
            dispatch({ type: 'END_LOAD' })
        }
        
    }
}

export const signup = userdata => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD'})
        const res = await axios.post(`${API_ROOT}/users/signup`, { userdata })
        const user = res.data;
        console.log(user)
        dispatch({ type: 'END_LOAD'})
    }
}