import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MainStyle from '../stylesheet/MainStyle';


import NewsHolder from '../components/NewsHolder';

const URL = 'https://www.news.developeridn.com/';

class MainPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      dataRequest: {}
    };

  }

  componentDidMount(){
    this.getNewsFromApi()
  }

  getNewsFromApi() {
    fetch(URL)
        .then((response) => response.json())
        .then((json) => this.setState(
          { dataRequest: json }
        ))
        .catch((error) => console.log(error));
}

  keyExtractor(item, index) {
    return index.toString();
  }

  renderItem = ({ item }) => {
    return(
      <NewsHolder
        judul={ item.judul }
        link={ item.link }
        kategori={ item.kategori }
        image={ item.poster }
        waktu={ item.waktu } />
    )
  }

  render() {
    const newsData = this.state.dataRequest.data;

    return(
      <View style={ MainStyle.container }>
        <FlatList
          data={ newsData }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem } />
      </View>
    );
  }
}



export default MainPage;