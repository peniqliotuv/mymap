import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imgWrap: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    bgImg: {
        flex: 1,
        resizeMode: 'stretch',
    },
    buttonContainer: {
        alignSelf: 'stretch',
        padding: 50,
    },
    boxButton: {
        borderWidth: 2,
        borderColor: '#FFFFFF',
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 5,
    },
    buttonText: {
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        fontSize: 27,
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 50,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        textShadowColor: 'rgba(0.2, 0.2, 0.2, 0.4)',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 5,
    },
    logoImg: {
        width: '80%',
        resizeMode: 'contain',
    },
    logo: {
        resizeMode: 'contain',
        width: 270,
        top: -27,
    }
});

export default styles;
