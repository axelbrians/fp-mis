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


const URL = 'https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list?id=latest&rapidapi-key=4835674456msh0879339e85d3316p110892jsn2bc8b68c2706&rapidapi-host=bloomberg-market-and-financial-news.p.rapidapi.com';

class BloombergPage extends React.Component{
  constructor(props){
    super(props);

    this.scrollY = new Animated.Value(0);
    this.diffClamp = Animated.diffClamp(this.scrollY, 0, 50);
    this.translateY = this.diffClamp.interpolate({
      inputRange: [0, 50],
      outputRange: [0, -50]
    });

    this.state = {
      dataRequest: {}
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
          { dataRequest: json.modules[0]}
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
        link={ item.longURL }
        kategori={ item.franchise }
        image={ item.thumbnailImage }
        waktu={ item.id.substring(0, 10) } />
    )
  }


  render() {
    const newsData = this.state.dataRequest.stories;

    return(
      <View style={ MainStyle.container }>
        <Animated.View 
          style={{ 
            transform: [
              { translateY: this.translateY }
            ], elevation: 3
           }}>
        <CustomHeader
          title="Bloomberg" />
        </Animated.View>

        <FlatList
          maxToRenderPerBatch={ 5 }
          initialNumToRender={ 7 }
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

  return (<BloombergPage scrollRef={ref} />);
};


