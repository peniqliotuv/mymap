import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

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
    },
    mid: {
        flex: 10,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        padding: 20,
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
    menuIcon: {
        marginRight: 10,
    },
    alignRight: {
        position: 'absolute',
        right: 0,
    },
    alignLeft: {
        position: 'absolute',
        left: 0,
    },
});

export default styles;

