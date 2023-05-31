import { linksApi } from '../../axios/index'
import { catchError } from '../../helpers/errors'
import { IGenericResponse } from '../../types/Auth'
import { IStateFieldsLinks, Ilink } from '../../types/User'

const createNewLink = async (link:IStateFieldsLinks): Promise<IGenericResponse<Ilink>> => {
    try {
        const response = await linksApi.post('/links', link)
        return {
            data: response.data
        }
    } catch (error) {
        return {
            error: catchError(error)
        }
    }
}

const updateLink = async (link: IStateFieldsLinks, id:string):Promise<IGenericResponse<Ilink>> => {
    try {
        const response = await linksApi.put(`/links/${id}`, link)
        return {
            data: response.data
        }
    } catch (error) {
        return {
            error: catchError(error)
        }
    }
}

const removeLink = async (id:string):Promise<IGenericResponse<number>> => {
    try {
        const response = await linksApi.delete(`/links/${id}`)

        return {
            data: response.data
        }
    } catch (error) {
        return {
            error: catchError(error)
        }
    }
}

const createPrincipalAccount = async (idLink:string):Promise<IGenericResponse<Ilink>> => {
    try {
        const response = await linksApi.post(`/user/set-principal-account/${idLink}`, undefined)

        return {
            data: response.data
        }
    } catch (error) {
        return {
            error: catchError(error)
        }
    }
}

const deletePrincipalAccount = async (idLink:string):Promise<IGenericResponse<number>> => {
    try {
        const response = await linksApi.delete(`/user/remove-principal-account/${idLink}`)

        return {
            data: response.status
        }
    } catch (error) {
        return {
            error: catchError(error)
        }
    }
}
export {
    createNewLink,
    updateLink,
    removeLink,
    createPrincipalAccount,
    deletePrincipalAccount
}
