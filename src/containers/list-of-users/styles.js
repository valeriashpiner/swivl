import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    flex: 1,
    paddingBottom: 60,
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  button: {
    width: width,
    height: 60,
    position: 'absolute',
    left: -15,
    bottom: 0,
  }
});
