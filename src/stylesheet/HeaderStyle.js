import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 3,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#212121',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50
  },
  left: {
    paddingLeft: 7
  },
  title: {
    color: '#fff',
    fontSize: 18
  }
});

export default HeaderStyle;