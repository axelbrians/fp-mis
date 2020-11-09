import {StyleSheet} from 'react-native';


const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsCard: {
    elevation: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignSelf: "baseline"
  },
  newsContent: {
    backgroundColor: '#232323'
  },
  newsTitle: {
    color: '#fff',
    fontSize: 32
  }
});

export default MainStyles;