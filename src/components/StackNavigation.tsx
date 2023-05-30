import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import { home } from "../screens"

const stack = createNativeStackNavigator()

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={home} />
      </stack.Navigator>
    </NavigationContainer>
  )
}