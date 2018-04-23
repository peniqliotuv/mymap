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
    menuText: {
        color: '#B8B8B8',
        fontSize: 22,
        paddingLeft: 15,
    },
    menuItem: {
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: colors.white,
        borderColor: '#B8B8B8',
        borderWidth: 0.5,
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
        right: 12,
    },
    alignLeft: {
        position: 'absolute',
        left: 0,
    },
    tick: {
        width: 25,
        height: 25,
    },
});

export default styles;

