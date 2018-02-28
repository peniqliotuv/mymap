import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  timelineEventGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundGrey,
  },
  dateContainer: {
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: "500",
    opacity: 0.7,
    letterSpacing: 1,
  },
  lineBreak: {
    width: "80%",
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});
