import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  middle: {
    flex: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '70%',
    height: '60%',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  bottom: {
    flex: 1,
    zIndex: -1,
    backgroundColor: colors.backgroundGrey,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
