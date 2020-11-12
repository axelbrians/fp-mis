import React, { useState } from 'react';
import { Button, StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import CnnPage from './src/pages/CnnPage';
import NytPage from './src/pages/NytPage';
import TheGuardian from './src/pages/TheGuardian';


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
      <Tab.Screen
        name="CNN"
        component={CnnPage} />
      <Tab.Screen
        name="New York Times"
        component={NytPage} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer theme={ DarkTheme }>
      <StatusBar
        barStyle = "light-content"
        // dark-content, light-content and default
        hidden = {false}
        //To hide statusBar
        backgroundColor = "#000000"
        //Background color of statusBar only works for Android
        translucent = {false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible = {true} />

      {/* <Stack.Navigator>
        <Stack.Screen
          name="empty"
          component={Home} />
        <Stack.Screen
          name="CNN"
          component={CnnPage} />
        <Stack.Screen
          name="New York Times"
          component={NytPage} />
      </Stack.Navigator> */}

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: {
            fontSize: 16
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center'
          }
        }} >
        <Tab.Screen
          name="CNN"
          component={CnnPage} />
        <Tab.Screen
          name="New York Times"
          component={NytPage} />
        <Tab.Screen
          name="The Guardian"
          component={TheGuardian} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
