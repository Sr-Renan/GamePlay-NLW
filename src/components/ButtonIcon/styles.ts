import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

//Criando objeto de estilização do button
export const  styles = StyleSheet.create({

    container: {
        marginTop: -50,
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row', //Para os elementos ficar um do lado do outro
        alignItems: 'center', 

    },
    title: {

        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',

    },
    iconWrapper: {

        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.line,
    },
    icon: {
        width: 24,
        height: 18,
    },
});