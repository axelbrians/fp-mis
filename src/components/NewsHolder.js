import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MainStyles from '../stylesheet/MainStyles';
import MainStyle from '../stylesheet/MainStyles';


class NewsHolder extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      judul: this.props.judul,
      thumbnail: this.props.thumbnail
    }
  }
  
  render() {
    return(
      <TouchableOpacity style={ MainStyle.newsCard }>
        <View style= { MainStyle.newsContent }>
          <Text style={ MainStyle.newsTitle }>Placeholder</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsHolder;