import axios from "axios";
import { API_ROOT } from '../constant'

export const authStatus = () => {
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.get(`${API_ROOT}/auth`, {withCredentials:true})
        const user = response.data.auth;
        if (user.auth) {
            dispatch({ type: 'END_LOAD' })
        } else {
            dispatch({ type: 'LOGIN_USER', payload: user })
            dispatch({ type: 'END_LOAD' })
        }
    }
}