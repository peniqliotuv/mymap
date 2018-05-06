import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  header: {
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    zIndex: 10,
  },
  headerText: {
    fontSize: 36,
    fontWeight: '600',
    color: colors.white,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: { width: 0, height: 4 },
  },
  sidebarIcon: {},
  settingsIcon: {},
  image: {
    margin: 10,
    marginTop: 20,
  },
});
