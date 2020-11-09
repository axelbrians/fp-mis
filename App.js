import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import MainPage from './src/pages/MainPage';
import { StatusBar } from 'expo-status-bar';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  dark: true,
  colors: {
    primary: '#bb86fc',
    background: '#121212',
    card: '#141414',
    text: '#000',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer theme={ DarkTheme }>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen name="Main Page" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
