import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import { Home, Login } from "../screens"
import { RootStackParamList } from "../types/NavigationType";

const stack = createNativeStackNavigator<RootStackParamList>()

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingHorizontal: 20,
          backgroundColor: '#fff'
        }
      }}>
        {/* <stack.Screen name="Home" component={Home} /> */}
        <stack.Screen name="Login" component={Login} />
      </stack.Navigator>
    </NavigationContainer>
  )
}