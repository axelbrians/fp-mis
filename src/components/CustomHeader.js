import React from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';

class CustomHeader extends React.Component{
  constructor() {
    super()


  }

  render() {
    return(
      <Header 
      leftComponent={{ text: 'CNN', color: '#fff' }} />
    );
  }

}


export default CustomHeader;