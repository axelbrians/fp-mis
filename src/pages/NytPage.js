import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import MainStyle from '../stylesheet/MainStyle';


import NewsHolder from '../components/NewsHolder';

const URL = 'https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=xMsKlFfPGS15O9vpFJqqm8hbDomgaEk5';

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