import { StyleSheet } from 'react-native';
import colors from '~/App/styles/colors';

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.blue,
        padding: 50,
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
    logoText: {
        color: '#FFFFFF',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0.2, 0.2, 0.2, 0.4)',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 5,
    },
    logo: {
        resizeMode: 'contain',
        width: 270,
        top: -27,
    }
});

export default styles;
