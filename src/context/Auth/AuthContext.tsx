import { createContext, useEffect, useState } from "react";
import { ISignIn, ISignUp } from "../../types/Auth";
import { useSecureStorage } from "../../hooks/useSecureStorage";
import authService from '../../services/Auth'
import axios from "axios";
import { tokenUser } from "../../constants/auth";

interface AuthProviderProps {
  children: JSX.Element[]
}

interface AuthContextProps {
  token: string | undefined
  error: string | undefined
  createAccount: (data: ISignUp) => void 
  login: (data: ISignIn) => void 
  logout: () => void
}

const AuthContextStateValues:AuthContextProps = {
  token: undefined,
  error: '',
  createAccount: (data: ISignUp) => {}, 
  login: (data: ISignIn) => {}, 
  logout: () => {}
}

export const AuthContext = createContext<AuthContextProps>(AuthContextStateValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const { secureValue: token, saveSecureValue, removeSecureValue } = useSecureStorage(tokenUser)

  const [error, setError] =  useState<string | undefined>('')

  const createAccount = async (data: ISignUp) => {
    const dataResponse = await authService.SignUp(data)

    if(dataResponse.data){
      const { token } = dataResponse.data
      saveSecureValue(token)
    }else{
      setError(dataResponse.error?.message)
    }
  } 
  
  const login = async (data: ISignIn) => {
    const dataResponse = await authService.SignIn(data)

    if(dataResponse.data){
      const { token } = dataResponse.data
      saveSecureValue(token)
    }else{
      setError(dataResponse.error?.message)
    }
  } 
  
  const logout = () => {
    axios.defaults.headers.common['Authorization'] = null
    removeSecureValue()
  }

  useEffect(()=>{
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
  },[ token ] )

  return(
    <AuthContext.Provider value={{
      token,
      error,
      createAccount,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
} 
