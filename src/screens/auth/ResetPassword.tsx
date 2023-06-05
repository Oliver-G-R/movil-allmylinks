import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { StyleAuthScreens, styleGlobal } from "../../constants/stye"
import { InputAuth } from "./components/InputAuth"
import { useState } from 'react';
import { ButtonForm } from './components/BtnAuth';


export const ResetPassword = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <SafeAreaView style={styleGlobal.container}>
      <Text style={StyleAuthScreens.title}>Send email for reset password</Text>
      <View style={{gap: 20}}>
        <Text style={StyleAuthScreens.text}>
          A token will be sent to your email, you will have 5 minutes to access it,
          otherwise you will need to re-enter your email within 2 minutes.
        </Text>
        <InputAuth
          keyboardType="email-address"
          placeholder="myemail@example.com"
          value={inputValue}
          onChangeText={e => setInputValue(e)}
        />
        <ButtonForm
          text='Send'
        />
      </View>
    </SafeAreaView>
  )
}
