import { StyleSheet, Dimensions } from 'react-native';
import colors from '~/App/styles/colors';

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;

const styles = StyleSheet.create({
    textEdit: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        height: 36,
        width: windowWidth,
        paddingLeft: 20,
        paddingRight: 20,
        color: 'grey',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 24,
        marginBottom: 5,
        paddingLeft: 20,
    },
    outer: {
        marginBottom: 10,
    },
});

export default styles;
