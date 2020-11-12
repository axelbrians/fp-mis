import React from 'react';
import { Text, View } from 'react-native';

import HeaderStyle from '../stylesheet/HeaderStyle';

class CustomHeader extends React.Component{
  constructor() {
    super();


  }

  render() {
    return(
      <View style={ HeaderStyle.container }>
        <View style={ HeaderStyle.left }>
          <Text style={ HeaderStyle.title }>Ini di header</Text>
        </View>

        <View style={ HeaderStyle.right }>
          <Text style={ HeaderStyle.title }>h3h3</Text>
        </View>
      </View>
    );
  }

}


export default CustomHeader;