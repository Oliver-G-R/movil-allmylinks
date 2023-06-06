import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import { Home, Login, SignUp } from "../screens"
import { RootStackParamList } from "../types/NavigationType";
import { ResetPassword } from "../screens/auth/ResetPassword";
import { useContext, useEffect } from 'react';
import { AuthContext } from "../context/Auth/AuthContext";
import { useIsFirstLaunch } from "../hooks/useIsFirstLaunch";
import { Text, View } from "react-native";

const stack = createNativeStackNavigator<RootStackParamList>()

export const StackNavigation = () => {
  const { token: userToken } = useContext(AuthContext)
  const [ firstLaunch, loadingFirstLanch ] = useIsFirstLaunch()

  if (loadingFirstLanch) {
    return <View>
      <Text>
        loading
      </Text>
    </View>
  }

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
        
        {
          firstLaunch && !userToken  ? (
            <>
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
              <stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <stack.Screen name="Home" component={Home} />
            </>
          )
        }
       
      </stack.Navigator>
    </NavigationContainer>
  )
}