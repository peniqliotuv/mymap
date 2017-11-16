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
  dateContainer: {
    width: '20%',
  },
  date: {
    textAlign: 'center',
    fontWeight: '100',
  },
  appHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  appName: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '600',
  },
  appIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '65%',
    padding: 10,
    marginRight: 20,
    backgroundColor: colors.white,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderRightWidth: 15,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  lineBreak: {
    marginBottom: 10,
    height: 1,
    backgroundColor: colors.grey,
  },
});
