import {StyleSheet} from 'react-native';


const MainStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#111111',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  floatingBtn: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingImg: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  }
});

export default MainStyle;