import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#93ffd5',
        padding: 50,
    },
    buttonContainer: {
        alignSelf: 'stretch',
    },
    logoText: {
        color: '#FFFFFF',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0.2, 0.2, 0.2, 0.4)',
        textShadowOffset: {width: 0, height: 3},
        textShadowRadius: 5,
    }
});

export default styles;
