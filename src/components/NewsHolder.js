import React from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
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

  // initiate state
  componentDidMount() {
    this.setState({ 
      judul: this.props.judul,
      kategori: this.props.kategori,
      image: this.props.image,
      link: this.props.link,
      waktu: this.props.waktu
    })
  }

  // open external link when card is clicked
  handleCardClick = () => {
    Linking.openURL(this.state.link).catch(() => alert('An error occurred when opening this link'));
  }
  
  render() {
    return(
      <TouchableOpacity
        style={ CardStyle.newsCard }
        onPress={ this.handleCardClick }  >
        <View style={ CardStyle.newsHeader }>

          <View style={ CardStyle.leftSide }>
          <Text style={ CardStyle.cardTitle }>{this.state.judul}</Text>
          </View>

          <View style={CardStyle.rightSide}>
            <Image 
              source={{ uri: this.state.image ? this.state.image : 'https://banner2.cleanpng.com/20180331/bjw/kisspng-exclamation-mark-symbol-computer-icons-circle-warn-exclamation-mark-5abfc772d257d5.9428334815225178748616.jpg' }}
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

// "data": [
//   {
//       "judul": "Tuntas Jalani Vonis 'Bau Ikan Asin', Rey Utami Keluar Rutan",
//       "link": "https://www.cnnindonesia.com/nasional/20201111194304-12-568734/tuntas-jalani-vonis-bau-ikan-asin-rey-utami-keluar-rutan",
//       "poster": "https://akcdn.detik.net.id/visual/2019/12/09/a83381ed-c954-4e37-8d4c-6692199334ce_169.jpeg?w=140&q=90",
//       "tipe": "Nasional",
//       "waktu": "18 menit yang lalu"
//   },