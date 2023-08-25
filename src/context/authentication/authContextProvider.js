import React, { createContext, useReducer } from 'react'
import { SIGN_IN_USER, SIGN_OUT_USER } from './authTypes'
import { reducer } from './authReducer'
import { useNavigate, useSearchParams } from 'react-router-dom';
import mockData from '../../_mock/admin.json';
import { postLogin, storageClear, storageGetItem } from '../../service/ash_mlm';
const initialState = {
  isSignedIn: false,
  user: null
}

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const loginUser = async ({ mobile_number, otp }) => {
    const redirect_to = searchParams.get('redirect_to');
    const response = await postLogin({
      users: {
        mobile_number,
        otp
      }
    })
    if(response && response.success) {
      dispatch(
        {
        type: SIGN_IN_USER, 
        payload: {
          username: JSON.parse(await storageGetItem('users')).full_name,
          otp
        }
      })

      if(redirect_to) {
        navigate(redirect_to, { replace: true })
      } else {
        navigate('/home', { replace: true });
      }
    }
    else {
      // User is logged out
      await storageClear();
      dispatch({type: SIGN_OUT_USER})
      return response.message
    }
  }
  const logoutUser = async () => {
    await storageClear();
    dispatch({type: SIGN_OUT_USER})
  }
  return <AuthContext.Provider 
            value={{
              isSignedIn: state.isSignedIn,
              user: state.user,
              login: loginUser,
              logout: logoutUser,
            }}>{props.children}</AuthContext.Provider>
}