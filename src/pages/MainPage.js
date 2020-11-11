import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MainStyle from '../stylesheet/MainStyles';


import NewsHolder from '../components/NewsHolder';

const URL = 'https://www.news.developeridn.com/';

class MainPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      data: [
      {
        "key": "1",
        "judul": "ini judul 1",
        "thumbnail": "http1"
      }, {
        "key": "2",
        "judul": "ini judul 2",
        "thumbnail": "http2"
      }, {
        "key": "3",
        "judul": "ini judul 3",
        "thumbnail": "http3"
      }, {
        "key": "4",
        "judul": "ini judul 4",
        "thumbnail": "http4"
      }
    ]
    };

  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    return(
      <NewsHolder
        judul={ item.judul }
        thumbnail={ item.thumbnail }
        key={ item.key } />
    )
  }

  render() {

    return(
      <View style={ MainStyle.container }>
        <FlatList
          data={ this.state.data }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem } />
      </View>
    );
  }
}



export default MainPage;