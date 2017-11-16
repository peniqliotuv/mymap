import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  date: {
    width: '20%',
  },
  appName: {
    textAlign: 'center',
    fontSize: 14,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: colors.white,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderRightWidth: 15,
  },
  lineBreak: {
    width: '80%',
    marginBottom: 10,
    height: 1,
    backgroundColor: colors.grey,
  },
});
