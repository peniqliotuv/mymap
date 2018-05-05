import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10,
    height: 41.5,
    width: 375,
  },
  button: {
    backgroundColor: colors.blue,
    borderRadius: 25,
    paddingTop: 4,
    paddingBottom: 4,
    height: 21.5,
    width: 115,
  },
  buttonText: {
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
    color: colors.white,
    textAlign: 'center',
    fontSize: 11,
  },
});
