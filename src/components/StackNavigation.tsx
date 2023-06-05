import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import { Home, Login, SignUp } from "../screens"
import { RootStackParamList } from "../types/NavigationType";
import { ResetPassword } from "../screens/auth/ResetPassword";

const stack = createNativeStackNavigator<RootStackParamList>()

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          paddingHorizontal: 20,
          backgroundColor: '#fff'
        }
      }}>
        {/* <stack.Screen name="Home" component={Home} /> */}
        <stack.Screen name="Login" component={Login} />
        <stack.Screen 
          options={{
            headerShown: true,
            title: 'Create account',
          }}
          name="SignUp" 
          component={SignUp} 
        />
        <stack.Screen 
          options={{
            headerShown: true,
            title: 'Reset password',
          }}
          name="ResetPassword" 
          component={ResetPassword} 
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}