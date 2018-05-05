import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';
import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
  },
  top: {
    flex: 1,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mid: {
    flex: 10,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
  },
  saveButton: {
    marginRight: 20,
  },
  buttonContainer: {
    alignSelf: 'stretch',
  },
  boxButton: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 27,
  },
  menuItem: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  icon: {
    width: 50,
    height: 50,
  },
  alignRight: {
    position: 'absolute',
    right: 0,
  },
  alignLeft: {
    position: 'absolute',
    left: 0,
  },
  userImage: {
    resizeMode: 'cover',
    height: 200,
    width: windowWidth,
    // width: null,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  imageContainer: {
    height: 200,
    width: 300,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  cameraButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 70,
    height: 70,
  },
});

export default styles;
