import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,   
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderBottomColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    image:{
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    colum: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    },
    caracteresLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
    },
    footer: {
        marginBottom: 56,
        marginVertical: 20,
        
    },

});