import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import HeaderStyle from '../stylesheet/HeaderStyle';

class CustomHeader extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={ HeaderStyle.container }>
        <View style={ HeaderStyle.left }>
        <Text style={ HeaderStyle.title }>{ this.props.title }</Text>
        </View>
      </View>
    );
  }

}


export default CustomHeader;