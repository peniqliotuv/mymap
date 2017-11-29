import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 135,
  },
  top: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  middle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    marginBottom: 10,
  },
  image: {
    position: 'absolute',
    bottom: 30,
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 2,
  },
});
