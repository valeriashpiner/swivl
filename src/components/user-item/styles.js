import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(171, 171, 171, 0.5)',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  text: {
    color: '#000000'
  }
});
