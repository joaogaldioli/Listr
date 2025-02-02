import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from './src/modules/common/components/login/LoginComponent';
import HomeComponent from './src/modules/common/components/home/HomeComponent';
import AddTaskComponent from './src/modules/common/components/add-task/AddTaskComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginComponent} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeComponent} options={{ headerShown: false }}/>
        <Stack.Screen name="AddTask" component={AddTaskComponent} options={{ headerShown: false }}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
