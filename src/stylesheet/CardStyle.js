import { StyleSheet } from 'react-native';

const CardStyle = StyleSheet.create({
  newsCard: {
    elevation: 2,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 8,
    marginHorizontal: 10,
    marginVertical: 7,
    flexDirection: 'column',
    backgroundColor: '#111111',
    flex: 1,
    borderColor: '#808080',
    borderWidth: 0.5
  },
  newsHeader: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 5,
    justifyContent: "flex-end"
  },
  leftSide: {
    flex: 3
  },
  rightSide: {
    flex: 1,
    marginLeft: 5
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18
  },  
  thumbnail: {
    width: 80,
    height: 60,
    borderRadius: 5
  },
  content: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10
  }, 
  contentText: {
    color: '#b3b3b3',
    fontSize: 12
  },

});

export default CardStyle;