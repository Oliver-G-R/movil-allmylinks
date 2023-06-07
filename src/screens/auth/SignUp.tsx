import { useState } from 'react'
import { SafeAreaView, Text, View, Image} from 'react-native';
import { StyleAuthScreens, styleGlobal } from '../../constants/stye';
import { InputAuth } from './components/InputAuth'
import { UserReggister } from '../../types/User'
import { ButtonForm } from './components/BtnAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/NavigationType';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useValdateInputs } from '../../hooks/useValdateInputs';

interface SignUpProps extends NativeStackScreenProps<RootStackParamList, 'SignUp'> {}

export const SignUp = ({ navigation }:SignUpProps) => {

  const [inputValues, setInputValues] = useState<UserReggister>({
    fullName: '',
    nickName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const {
    inputErrors,
    validateSignUp,
    handleErrors
  } = useValdateInputs<UserReggister>()

 
  const handleChange = (name: string, value: any) => {
    setInputValues({...inputValues, [name]:value})
  }

  const register = () => {
    const isValid = validateSignUp(inputValues)

    if(isValid){
      //reggitser
      console.log("Now Register.....")
    }
  }
  
  return (
    <SafeAreaView style={styleGlobal.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
      >
          <View style={{
            alignItems: 'center'
          }}>
            <Image
              source={require('../../assets/Search-amico.png')}
              style={{
                width: 250,
                height: 250,
              }}/>
          </View>
          <View style={{
            alignItems: 'center',
            marginBottom: 20
          }}>
            <Text style={StyleAuthScreens.title}>Create an account now!</Text>
            <Text style={[StyleAuthScreens.text, {
              maxWidth: 330
            }]}>Let other people know where to find you 😎.</Text>
          </View>
      
         <View style={{
          marginBottom: 20
         }}>
            <InputAuth
              onFocus={() => handleErrors("nickName", null)}
              errorMessage={inputErrors.nickName}
              placeholder='Nick name'
              value={inputValues.nickName}
              onChangeText={text => handleChange('nickName', text)}
            />
            <InputAuth
              onFocus={() => handleErrors("fullName", null)}
              errorMessage={inputErrors.fullName}
              placeholder='Full Name'
              value={inputValues.fullName}
              onChangeText={text => handleChange('fullName', text)}
            />
            <InputAuth
              onFocus={() => handleErrors("email", null)}
              errorMessage={inputErrors.email}
              placeholder='Email'
              value={inputValues.email}
              keyboardType='email-address'
              onChangeText={text => handleChange('email', text)}
            />
            <InputAuth
              onFocus={() => handleErrors("password", null)}
              errorMessage={inputErrors.password}
              placeholder='Password'
              value={inputValues.password}
              secureTextEntry
              onChangeText={text => handleChange('password', text)}
            />
            <InputAuth
              onFocus={() => handleErrors("repeatPassword", null)}
              errorMessage={inputErrors.repeatPassword}
              placeholder='Repeat Password'
              secureTextEntry
              value={inputValues.repeatPassword}
              onChangeText={text => handleChange('repeatPassword', text)}
            />
         </View>
      
        <ButtonForm 
          onPress={() => register()}
          bckColor='rgb(17, 88, 132)' 
          text='Reggister'/>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

