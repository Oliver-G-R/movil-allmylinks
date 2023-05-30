import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';

import { Home } from "../screens/Home"

const stack = createNativeStackNavigator()

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  )
}