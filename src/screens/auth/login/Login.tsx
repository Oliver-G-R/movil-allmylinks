import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Image, ScrollView } from 'react-native';
import { styleGlobal } from '../../../constants/stye';
import { InputAuth } from '../components/InputAuth';
import {useState} from 'react'
import { BtnAuth } from '../components/BtnAuth';


export const Login = () => {

  const [inputValues, setInputValues] = useState<{
    nickName: string,
    password: string
  }>({
    nickName: '',
    password: ''
  })

  const handleChange = (name: string, value: any) => {
    setInputValues({...inputValues, [name]:value})
  }
  
  return (
    <SafeAreaView style={styleGlobal.container}>
      <ScrollView contentContainerStyle={styleGlobal.container} showsVerticalScrollIndicator={false}>
        <View style={{
          alignItems: 'center'
        }}>
          <Image
            source={require('../../../assets/Account-amico.png')}
            style={{
              width: 250,
              height: 250,
            }}/>
        </View>
  
        <Text style={Style.title}>Hey, Login Now!</Text>
  
        <View style={Style.contentText}>
          <Text style={Style.text}>I am new user / </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={Style.textBlack}>Create new account</Text> 
          </TouchableOpacity>
        </View>
  
        <KeyboardAvoidingView
          style={{
            gap: 30
          }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <InputAuth
            placeholder='Nick name or email'
            value={inputValues.nickName}
            onChangeText={text => handleChange('nickName', text)}
          />
          <InputAuth
            placeholder='Password'
            value={inputValues.password}
            secureTextEntry
            onChangeText={text => handleChange('password', text)}
          />
  
        </KeyboardAvoidingView>
        <View style={Style.contentText}>
          <Text style={Style.text}>Forgot your password? </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={Style.textBlack}>Reset Password</Text> 
          </TouchableOpacity>
        </View>
  
        <View style={Style.containerBtn}>
          <BtnAuth 
            bckColor='rgb(17, 88, 132)' 
            text='Sign in'/>
          <BtnAuth 
            textColor='rgb(17, 88, 132)'
            bckColor='transparent' 
            text='Skip Now'/>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const Style = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#151515'
  },
  contentText: {
    flexDirection: 'row',
    marginVertical: 40,
    alignItems: 'center',
  },
  text: {
    color: '#575757',
    fontSize: 20
  },
  textBlack:{
    color: '#151515',
    fontSize: 18

  },
  containerBtn:{
    gap: 20
  },
  skipBtn: {
    backgroundColor: 'transparent',

  }
 
})