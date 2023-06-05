import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Image, ScrollView } from 'react-native';
import { StyleAuthScreens, styleGlobal } from '../../constants/stye';
import { InputAuth } from './components/InputAuth';
import {useState} from 'react'
import { ButtonForm } from './components/BtnAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/NavigationType';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface LoginProps extends NativeStackScreenProps<RootStackParamList, 'Login'> {}


export const Login = ({ navigation }:LoginProps) => {

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
      <KeyboardAwareScrollView 
        showsVerticalScrollIndicator={false}>
        <View style={{
          alignItems: 'center'
        }}>
          <Image
            source={require('../../assets/Account-amico.png')}
            style={{
              width: 250,
              height: 250,
            }}/>
        </View>
  
        <Text style={StyleAuthScreens.title}>Hey, Login Now!</Text>
  
        <View style={StyleAuthScreens.contentText}>
          <Text style={StyleAuthScreens.text}>I am new user / </Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('SignUp')}
            activeOpacity={0.8}>
            <Text style={StyleAuthScreens.textBlack}>Create new account</Text> 
          </TouchableOpacity>
        </View>
  
        <View
          style={{
            gap: 20
          }}
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
  
        </View>
        <View style={StyleAuthScreens.contentText}>
          <Text style={StyleAuthScreens.text}>Forgot your password? </Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ResetPassword')}
            activeOpacity={0.8}>
            <Text style={StyleAuthScreens.textBlack}>Reset Password</Text> 
          </TouchableOpacity>
        </View>
  
        <View style={StyleAuthScreens.containerBtn}>
          <ButtonForm 
            bckColor='rgb(17, 88, 132)' 
            text='Sign in'/>
          <ButtonForm 
            textColor='rgb(17, 88, 132)'
            bckColor='transparent' 
            text='Skip Now'/>
        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  )
}

