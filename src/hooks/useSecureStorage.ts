import * as SecureStore from 'expo-secure-store'
import { useState, useEffect } from 'react';

export const useSecureStorage = (key: string) => {
  const [secureValue, setSecureValue] = useState<string|undefined>(undefined)
  const [error, setError] = useState('')
  
  const saveSecureValue = async (value:string) =>  {
    try {
      await SecureStore.setItemAsync(key, value)
    } catch (e) {
      setError("Error to get value")
    }
  }

  const removeSecureValue = async () => {
    try {
      await SecureStore.deleteItemAsync(key)
    } catch (error) {
      setError("Error to remove value")
    }
  }

  useEffect(() => {
    SecureStore.getItemAsync(key)
      .then(value => {
        if (value) {
          setSecureValue(value)
        } else {
          setError("No value")
        }
      })
      .catch(e => {
        setError("Error to get value")
      })
   
  }, [])
  

 return  {
  secureValue,
  error,
  saveSecureValue,
  removeSecureValue
 }
}