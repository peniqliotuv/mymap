import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  overlay: {
    backgroundColor: colors.white,
    opacity: 0.9,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 90,
    paddingBottom: 30,
  },
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  timestamp: {
    textAlign: 'center',
    fontWeight: '100',
    alignSelf: 'flex-start',
    fontSize: 14,
    color: colors.grey,
  },
  appName: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '600',
    marginRight: 60,
  },
  appIcon: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  card: {
    flexDirection: 'column',
    width: '90%',
    padding: 10,
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
