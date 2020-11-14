import React, { useRef } from 'react';
import { Button, StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import CnnPage from './src/pages/CnnPage';
import NytPage from './src/pages/NytPage';
import BloombergPage from './src/pages/BloombergPage';


const Tab = createBottomTabNavigator();

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

      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
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
          name="Bloomberg"
          component={BloombergPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
