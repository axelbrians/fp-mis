import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Image, 
  Animated } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import MainStyle from '../stylesheet/MainStyle';


import NewsHolder from '../components/NewsHolder';
import CustomHeader from '../components/CustomHeader';

// dont forget to pass you api-key to this url
const URL = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?';

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
        .catch((error) => alert(error));
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
        waktu={ item.updated_date.slice(0, 10) } />
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
          ref={ this.props.scrollRef }
          data={ newsData }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem }
          onScroll={(e) => { 
            this.scrollY.setValue(e.nativeEvent.contentOffset.y) }}
          style={{ paddingTop: 55 }}
          ListFooterComponent={ <View style={{ marginBottom: 55 }} /> } />
          
      </View>
    );
  }
}

export default function() {
  const ref = React.useRef(null);

  useScrollToTop(ref);

  return (<NytPage scrollRef={ref} />);
};