import { useState, useEffect } from 'react';
import { UserReggister } from '../types/User';
import { ISignIn } from '../types/Auth';

export const useValdateInputs = <T>() => {

  const [inputErrors, setInputErrors] = useState<T>({} as T)

  useEffect(() => {
    console.log(inputErrors)
  }, [inputErrors])

  const handleErrors = (inputName: string, inputValue: string | null) => {
    setInputErrors({...inputErrors, [inputName]: inputValue})

  }

  const validateSignUp = (inputValues: UserReggister) => {
    let isValid = true
    var errors = {} as T

    if (inputValues.fullName.trim() === "") {
      errors = {...errors, ['fullName']: 'required full name'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['fullName']: null})
      isValid = true
    }

    const fullNameEx =   /^[A-Za-z\s]+$/
    if(!fullNameEx.test(inputValues.fullName)){
      errors = {...errors, ['fullName']: 'Full name is not valid'}
      isValid = false
    }else{
      isValid = true
      setInputErrors({...inputErrors, ['fullName']: null})
    }

    if (inputValues.fullName.trim().length < 3) {
      errors = {...errors, ['fullName']: 'Full name is too short'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['fullName']: null})
    }
  
  
    if (inputValues.nickName.trim().length > 20){
      errors = {...errors, ['nickName']: 'Nickname is too long'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['nickName']: null})
    }
    
    const expValidNickName = /^[a-z0-9_.]+$/
    if(!expValidNickName.test(inputValues.nickName)) {
      errors = {...errors, ['nickName']: 'Nickname is not valid'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['nickName']: null})
    }

    const expValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    if (!expValidEmail.test(inputValues.email)) {
      errors = {...errors, ['email']: 'Email is not valid'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['email']: null})
    }

    if(inputValues.password.trim().length < 8) {
      errors = {...errors, ['password']: 'Password is too short'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['password']: null})
    }

    if(inputValues.password.trim().length > 20) {
      errors = {...errors, ['password']: 'Password is too long'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['password']: null})
    }

    if (inputValues.password !== inputValues.repeatPassword) {
      errors = {...errors, ['repeatPassword']: 'Passwords do not match'}
      isValid = false
    }else{
      setInputErrors({...inputErrors, ['repeatPassword']: null})
    }

    if(!isValid) setInputErrors(errors)

    return isValid
    
  }

  const validateSignIn = (inputValues: ISignIn) => {
    let isValid = true
    var errors = {} as T
    console.log(inputValues)

    //veerificar si se trata de un nickname o emal para poder validarlos por separado 
    const expValidNickName = /^[a-z0-9_.]+$/
    const expValidEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (inputValues.nickNameOrEmail === "") {
      errors = {...errors, ['nickNameOrEmail']: 'required nickname or email'}
      isValid = false
    }else if (expValidNickName.test(inputValues.nickNameOrEmail)) {
      if (inputValues.nickNameOrEmail.trim().length > 20) {
        errors = {...errors, ['nickNameOrEmail']: 'Nickname is too long'}
        isValid = false
      }else {
        setInputErrors({...inputErrors, ['nickNameOrEmail']: null})
        isValid = true
      }
    }else if (!expValidEmail.test(inputValues.nickNameOrEmail)) {
        errors = {...errors, ['nickNameOrEmail']: 'Email is not valid'}
        isValid = false
    }else{
      setInputErrors({...inputErrors, ['nickNameOrEmail']: null})
      isValid = true
    }

    if(inputValues.password === "") {
      errors = {...errors, ['password']: 'Required password'}
      isValid = false
    }

    if(!isValid) setInputErrors(errors)

    return isValid
  }


  return {
    inputErrors,
    validateSignUp,
    validateSignIn,
    handleErrors
  }
  
}
