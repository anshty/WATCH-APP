import { } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './src/screens/HomeScreens';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="HOME" component={HomeScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

