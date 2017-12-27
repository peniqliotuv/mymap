import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 10,
    paddingBottom: 10,
    height: 41.5,
    width: 375,
  },
  button: {
    backgroundColor: colors.purple,
    borderRadius: 25,
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 30,
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
