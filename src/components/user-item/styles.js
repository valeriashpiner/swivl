import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(171, 171, 171, 0.5)',
  },
  avatar: {
    width: 100,
    height: 100,
  },
  textLogin: {
    color: '#1269d3',
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    width: 250,
    color: 'rgba(171, 171, 171, 1)',
    paddingLeft: 5,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
});
