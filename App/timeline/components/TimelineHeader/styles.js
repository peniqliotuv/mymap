import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  header: {
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
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
  sidebarIcon: {

  },
  settingsIcon: {

  },
});