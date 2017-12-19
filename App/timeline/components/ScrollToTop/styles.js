import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGrey,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: colors.purple,
    marginRight: 130,
    marginLeft: 130,
    borderRadius: 25,
    paddingTop: 4,
    paddingBottom: 4,
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