import { AxiosResponse } from "axios"
import { linksApi } from "../../axios"
import { IGenericResponse, IResponseAuth, ISignIn, ISignUp } from "../../types/Auth"
import { catchError } from "../../helpers/errors"

const SignUp = async (user: ISignUp): Promise<IGenericResponse<IResponseAuth>> => {
  try {
    const res = await linksApi.post<AxiosResponse<IResponseAuth>>("/auth/signUp", user)
    return {
      data: res.data.data
    }
  } catch (error) {
    return {
      error: catchError(error)
    }
  }
}

const SignIn = async (user: ISignIn): Promise<IGenericResponse<IResponseAuth>> => {
  try {
    const res = await linksApi.post<AxiosResponse<IResponseAuth>>("/auth/signUp", user)
    return {
      data: res.data.data
    }
  } catch (error) {
    return {
      error: catchError(error)
    }
  }
}

export default {
  SignIn,
  SignUp
}