import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet} from 'react-native';


class MainPage extends React.Component{
  constructor(props){
    super(props);
    
    const {navigation} = this.props
  }
  

  render() {
    return(
      <View>
        <Text>Main Page</Text>
      </View>
    );
  }
}



export default MainPage;