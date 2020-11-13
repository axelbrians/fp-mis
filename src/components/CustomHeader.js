import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import HeaderStyle from '../stylesheet/HeaderStyle';

class CustomHeader extends React.Component{
  constructor() {
    super();


  }

  handleTheme() {
    
  }

  render() {
    return(
      <View style={ HeaderStyle.container }>
        <View style={ HeaderStyle.left }>
      
        </View>

        <TouchableOpacity
          style={ HeaderStyle.right }
          onPress={ this.handleTheme } >
          <Image
            source={ require('../icon/dark-1.png') }
            style={ HeaderStyle.icon } />
        </TouchableOpacity>
      </View>
    );
  }

}


export default CustomHeader;