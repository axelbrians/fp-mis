import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import CardStyle from '../stylesheet/CardStyle';


class NewsHolder extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      judul: '',
      kategori: '',
      image: this.props.image,
      link: '',
      waktu: ''
    }
  }

  componentDidMount() {
    this.setState({ 
      judul: this.props.judul,
      kategori: this.props.kategori,
      image: this.props.image,
      link: this.props.link,
      waktu: this.props.waktu
    })
  }
  
  render() {
    return(
      <TouchableOpacity style={ CardStyle.newsCard }>
        <View style={ CardStyle.newsHeader }>

          <View style={ CardStyle.leftSide }>
          <Text style={ CardStyle.cardTitle }>{this.state.judul}</Text>
          </View>

          <View style={CardStyle.rightSide}>
            <Image 
              source={{ uri: this.state.image }}
              style={ CardStyle.thumbnail } />
          </View>
        </View>

        <View style={ CardStyle.content }>
          {/* <Text style={ CardStyle.contentText }>{this.state.image}</Text> */}

          <Text style={ CardStyle.contentText }>{this.state.waktu}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default NewsHolder;

// data: [
//   {
//     "key": "1",
//     "judul": "ini judul 1",
//     "thumbnail": "http1"
//   }, {
//     "key": "2",
//     "judul": "ini judul 2",
//     "thumbnail": "http2"
//   }, {
//     "key": "3",
//     "judul": "ini judul 3",
//     "thumbnail": "http3"
//   }, {
//     "key": "4",
//     "judul": "ini judul 4",
//     "thumbnail": "http4"
//   }
// ],