import { StyleSheet } from 'react-native';

const HeaderStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    elevation: 3,
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#555',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50
  },
  left: {

  },
  title: {
    color: '#fff',
    fontSize: 18
  },
  right: {

  }
});

export default HeaderStyle;