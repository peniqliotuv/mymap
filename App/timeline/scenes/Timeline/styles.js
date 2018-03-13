import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  scrollView: {
    flex: 7,
    minHeight: 300,
  },
  outerView: {
    flex: 1,
    backgroundColor: colors.backgroundGrey,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.blue,
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowRadius: 4,
    textShadowOffset: { width: 0, height: 4 },
  },
  backgroundImage: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    width: null,
    resizeMode: 'cover',
  },
  scrollToTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'transparent',
  },
  buffer: {
    height: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: colors.blue,
  },
  menuIcon: {
    left: -5,
  },
  noEventsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ellipseIcon: {
    backgroundColor: colors.backgroundGrey,
  },
  noEventsText: {
    fontSize: 36,
    color: colors.textGrey,
    textAlign: 'center',
  },
});
