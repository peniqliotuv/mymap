import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    height: 40,
    marginTop: 25,
    color: colors.white,
    fontSize: 25,
  },
  image: {
    marginLeft: 10,
    margin: 20,
    height: 35,
    width: 35,
  },
  drawerItem: {
    flexDirection: 'row',
    paddingBottom: 30,
  },
  filterButton: {
    borderWidth: 6,
    width: 50,
    height: 50,
    backgroundColor: colors.purple,
    borderRadius: 50,
    marginLeft: 15,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    color: colors.white,
    paddingLeft: 15,
  }
});
