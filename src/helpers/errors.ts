import { IResponseError } from "../types/Auth"

const getError = (error: Array<string> | string): string =>
  typeof error === 'string' ? error : error[0]

const catchError = (error: any): IResponseError => {
  if (error.response?.data) {
    return {
      statusCode: error.response.status,
      message: getError(error.response.data.message || error.message)
    }
  } else {
    return {
      statusCode: 500,
      message: 'Something went wrong'
    }
  }
}
export { getError, catchError }
