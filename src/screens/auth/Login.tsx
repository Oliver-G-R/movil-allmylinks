import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Image, ScrollView } from 'react-native';
import { StyleAuthScreens, styleGlobal } from '../../constants/stye';
import { InputAuth } from './components/InputAuth';
import {useState} from 'react'
import { ButtonForm } from './components/BtnAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/NavigationType';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ISignIn } from '../../types/Auth';
import { useValdateInputs } from '../../hooks/useValdateInputs';

interface LoginProps extends NativeStackScreenProps<RootStackParamList, 'Login'> {}


export const Login = ({ navigation }:LoginProps) => {

  const [inputValues, setInputValues] = useState<ISignIn>({
    nickNameOrEmail: '',
    password: ''
  })

  const {inputErrors, validateSignIn, handleErrors} = useValdateInputs<ISignIn>()



  const handleChange = (name: string, value: any) => {
    setInputValues({...inputValues, [name]:value})
  }
  
  const signIn = () => {
    const isValid = validateSignIn(inputValues)

    if(isValid){
      //reggitser
      console.log("Now Login.....")
    }
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
          
          }}
        >
          <InputAuth 
            onFocus={() => handleErrors("nickNameOrEmail", null) }
            errorMessage={inputErrors.nickNameOrEmail}
            placeholder='Nick name or email'
            value={inputValues.nickNameOrEmail}
            onChangeText={text => handleChange('nickNameOrEmail', text)}
          />
          <InputAuth 
            onFocus={() => handleErrors("password", null) }
            errorMessage={inputErrors.password}
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
            onPress={() => signIn()}
            bckColor='rgb(17, 88, 132)' 
            text='Sign in'/>
          <ButtonForm 
            onPress={() => navigation.navigate("Home")}
            textColor='rgb(17, 88, 132)'
            bckColor='transparent' 
            text='Skip Now'/>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

