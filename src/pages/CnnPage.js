import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Image,
  Animated } from 'react-native';
import MainStyle from '../stylesheet/MainStyle';


import NewsHolder from '../components/NewsHolder';
import CustomHeader from '../components/CustomHeader';

const URL = 'https://www.news.developeridn.com/';

class CnnPage extends React.Component{
  constructor(props){
    super(props);

    this.scrollY = new Animated.Value(0);
    // this.scrollY.interpolate()

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
        .catch((error) => alert(error));
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
        kategori={ item.tipe }
        image={ item.poster }
        waktu={ item.waktu } />
    )
  }


  render() {
    const newsData = this.state.dataRequest.data;

    return(
      <View style={ MainStyle.container }>
        <CustomHeader />
        <FlatList
          data={ newsData }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem }
          onScroll={(e) => { 
            this.scrollY.setValue(e.nativeEvent.contentOffset.y) }} />
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



export default CnnPage;