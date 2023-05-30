import { TextInput, StyleSheet } from 'react-native';

interface InputAuthProps {
  placeholder: string
  value: any
  secureTextEntry?: boolean
  onChangeText:  ((text: string) => void) | undefined
}

export const InputAuth = ({placeholder, value, secureTextEntry = false, onChangeText}: InputAuthProps) => {
  return (
    <TextInput
        value={value}
        style={Style.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
    />  
  )
}


const Style = StyleSheet.create({
   textInput:{
    backgroundColor: '#f0f8ff',
    padding: 10,
    fontSize: 19,
    borderRadius: 5
  },
})