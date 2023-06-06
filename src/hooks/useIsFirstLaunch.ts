import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useIsFirstLaunch = () => {
  const [launched, setLaunched] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched")
      .then(value  => {
        if(value === null) {
          AsyncStorage.setItem("alreadyLaunched", "true")
          setLaunched(true)
        }else{
          setLaunched(false)
        }
        setLoading(false)
      })
    
  }, [])

  return [
    launched,
    loading
  ]

}
