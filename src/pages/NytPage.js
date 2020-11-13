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

const URL = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xMsKlFfPGS15O9vpFJqqm8hbDomgaEk5';

class NytPage extends React.Component{
  constructor(props){
    super(props);

    this.scrollY = new Animated.Value(0);
    this.diffClamp = Animated.diffClamp(this.scrollY, 0, 50);
    this.translateY = this.diffClamp.interpolate({
      inputRange: [0, 50],
      outputRange: [0, -50]
    });

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
        judul={ item.title }
        link={ item.url }
        kategori={ item.section }
        image={ item.thumbnail_standard }
        waktu={ item.updated_date } />
    )
  }


  render() {
    const newsData = this.state.dataRequest.results;

    return(
      <View style={ MainStyle.container }>
        <Animated.View 
          style={{ 
            transform: [
              { translateY: this.translateY }
            ], elevation: 3
           }}>
        <CustomHeader
          title="New York Times" />
        </Animated.View>
        <FlatList
          data={ newsData }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem }
          onScroll={(e) => { 
            this.scrollY.setValue(e.nativeEvent.contentOffset.y) }}
          style={{ paddingTop: 50 }} />
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