import { loginFailure, loginStart, loginSucccess } from "./userRedux";
import {publicRequest} from '../requestMethod'

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSucccess(res.data));

    }catch(err){
        dispatch(loginFailure());

    }

};