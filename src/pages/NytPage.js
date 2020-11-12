import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import MainStyle from '../stylesheet/MainStyle';


import NewsHolder from '../components/NewsHolder';

const URL = '';

class NytPage extends React.Component{
  constructor(props){
    super(props);

    

    this.state = {
      dataRequest: {},
      
    };

  }

  componentDidMount(){
    this.getNewsFromApi()
  }

  // fetch all data
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


  // rendering each item from request
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
        <TouchableOpacity
          style={ MainStyle.floatingBtn }>
          <Image 
            style={ MainStyle.floatingImg }
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }} />
        </TouchableOpacity>
      </View>
    );
  }
}



export default NytPage;