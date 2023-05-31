import { useState } from 'react'
import { SafeAreaView, Text, View, Image} from 'react-native';
import { StyleAuthScreens, styleGlobal } from '../../constants/stye';
import { InputAuth } from './components/InputAuth'
import { UserReggister } from '../../types/User'
import { BtnAuth } from './components/BtnAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/NavigationType';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface SignUpProps extends NativeStackScreenProps<RootStackParamList, 'SignUp'> {}

export const SignUp = ({ navigation }:SignUpProps) => {

  const [inputValues, setInputValues] = useState<UserReggister>({
    fullName: '',
    nickName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })
  
  const handleChange = (name: string, value: any) => {
    setInputValues({...inputValues, [name]:value})
  }
  
  return (
    <SafeAreaView style={styleGlobal.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20
        }}
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
        <InputAuth
          placeholder='Nick name or email'
          value={inputValues.nickName}
          onChangeText={text => handleChange('nickName', text)}
        />
        <InputAuth
          placeholder='Full Name'
          value={inputValues.fullName}
          onChangeText={text => handleChange('fullName', text)}
        />
        <InputAuth
          placeholder='Email'
          value={inputValues.email}
          keyboardType='email-address'
          onChangeText={text => handleChange('email', text)}
        />
        <InputAuth
          placeholder='Password'
          value={inputValues.password}
          secureTextEntry
          onChangeText={text => handleChange('password', text)}
        />
        <InputAuth
          placeholder='Repeat Password'
          secureTextEntry
          value={inputValues.repeatPassword}
          onChangeText={text => handleChange('repeatPassword', text)}
        />
      <View style={StyleAuthScreens.containerBtn}>
        <BtnAuth 
          bckColor='rgb(17, 88, 132)' 
          text='Next'/>
        <BtnAuth
          onPress={() => navigation.goBack()}
          textColor='rgb(17, 88, 132)'
          bckColor='transparent' 
          text='Back <-'/>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

