import { TextInput, StyleSheet, KeyboardTypeOptions, Text, View } from 'react-native';
import { useState } from 'react';

interface InputAuthProps {
  placeholder: string
  value: any
  secureTextEntry?: boolean
  keyboardType?:  KeyboardTypeOptions
  errorMessage?: string
  onChangeText:  ((text: string) => void) | undefined,
  onFocus?: () => void,
}

export const InputAuth = (props: InputAuthProps) => {
  const {
    placeholder, 
    value, 
    secureTextEntry = false, 
    keyboardType = 'default', 
    errorMessage,
    onChangeText,
    onFocus
  } = props

  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <>
      <TextInput
        value={value}
        style={[Style.textInput, {
          borderColor: errorMessage ? 'red' : errorMessage && !isFocused ? 'red' : 'transparent' 
        }]}
        onFocus={() => {
          onFocus && onFocus()
          setIsFocused(true)
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />  
    {
  
      errorMessage && <Text style={Style.errorMessage} >
        {errorMessage}
      </Text>
    }
    </>
  )
}


const Style = StyleSheet.create({
  errorMessage: {
    color: 'red',
    marginLeft: 'auto',
  },
  
  textInput:{
    marginVertical: 8,
    backgroundColor: '#f0f8ff',
    padding: 10,
    borderWidth: 1,
    fontSize: 19,
    borderRadius: 5
  },
})